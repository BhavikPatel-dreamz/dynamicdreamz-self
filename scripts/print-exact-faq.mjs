import fs from 'fs';

const html = fs.readFileSync('scratch/woocommerce-development-live.html', 'utf8');

const faqIdx = html.indexOf('faq-sec');
const endFaq = html.indexOf('</section>', faqIdx);
const faqHtml = html.substring(faqIdx - 50, endFaq + 20);

console.log('=== EXACT LIVE FAQ HTML ===');
console.log(faqHtml);
