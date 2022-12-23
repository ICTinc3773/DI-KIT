const puppeteer = require('puppeteer');

let browser:any;
let page:any;

describe('inquiry', () => {
	beforeEach(async () => {
		browser = await puppeteer.launch({headless: false});
		page = await browser.newPage();

		await page.goto('http://test5.ictinc.co.jp/inquiry');
		// await page.goto('http://localhost:3000/inquiry');
		await page.screenshot({ path: './test/e2e/inquiry/screenshots/input.png'});

		await page.type('#name', 'テスト名前');
		await page.type('#age', '20');
		await page.type('#email', 'k.nagao@ictinc.co.jp');
		await page.tap('#male');
		await page.select('#prefName', '北海道');
		await page.type('#message', 'テスト\n\nテストテストテストテストテストテストテストテストテストテストテストテスト\nテストテストテストテストテストテストテストテスト');
		await page.tap('#privacy');
		await page.tap('#regal');

		const [fileChooser] = await Promise.all([
			page.waitForFileChooser(),
			page.tap('#file')
		])
		await fileChooser.accept(['test/e2e/assets/images/forFileUploadTest.jpg']);
	}, 300000);

	it('inquiryInput', async () => {
		await page.tap('#submit');

		// 確認画面のテキスト出力確認
		await page.waitForSelector('#inquiryConfirm').then(async () => {
			expect(await page.$eval('#name', (name:HTMLTableCellElement) => name.innerText)).toBe('テスト名前');
			expect(await page.$eval('#age', (age:HTMLTableCellElement) => age.innerText)).toBe('20');
			expect(await page.$eval('#email', (email:HTMLTableCellElement) => email.innerText)).toBe('k.nagao@ictinc.co.jp');
			expect(await page.$eval('#gender', (gender:HTMLTableCellElement) => gender.innerText)).toBe('男性');
			expect(await page.$eval('#prefName', (prefName:HTMLTableCellElement) => prefName.innerText)).toBe('北海道');
			expect(await page.$eval('#message', (message:HTMLTableCellElement) => message.innerText)).toBe('テスト\n\nテストテストテストテストテストテストテストテストテストテストテストテスト\nテストテストテストテストテストテストテストテスト');
			expect(await page.$eval('#file', (file:HTMLTableCellElement) => file.innerText)).toBe('forFileUploadTest.jpg');
		});

		await page.tap('#submit');

		// 完了画面のテキスト出力確認
		await page.waitForSelector('#inquiryCompleted').then(async () => {
			await expect(await page.$eval('#inquiryCompleted p', (text:HTMLParagraphElement) => text.innerText)).toBe('送信完了');
		});

	}, 300000);

	afterEach(async () => {
		await browser.close();
	});

});
