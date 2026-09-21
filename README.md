# Personal Dashboard

A privacy-first, zero-backend personal dashboard for daily tasks, habits, quick notes, and focused work. Everything runs in the browser and is stored locally.

## English

### Why it exists
Daily planning often gets scattered across several apps. Personal Dashboard keeps a deliberately small set of useful tools on one responsive page without requiring an account, server, analytics service, or API key.

### Features
- Tasks: add, complete, reopen, and delete.
- Daily habits: create habits and toggle today's completion.
- Quick notes with multiline text.
- 25-minute focus timer with completed-focus tracking.
- Daily overview cards for tasks, habits, and focus minutes.
- JSON backup export/import with schema validation.
- Persistent dark/light preference.
- Responsive interface for desktop and mobile.
- Browser-only persistence via `localStorage`; no network calls.

### Requirements & installation
Any current browser with ES modules, `localStorage`, `crypto.randomUUID`, and Blob support. For local development, Python 3 or any static server is enough.

```bash
git clone https://github.com/rad03i2/personal-dashboard.git
cd personal-dashboard
python -m http.server 8000
```

Open `http://localhost:8000`. Do not open `index.html` directly from `file://`; serving it avoids browser module restrictions.

### Usage
Add tasks, habits, and notes from their cards. Click the circle/check to toggle a task or today's habit. The focus timer records 25 minutes only after a full session completes. Use **Export** to download a JSON backup and **Import** to restore one.

### Configuration
There are no environment variables or secrets. The app intentionally has no backend. Application data uses the `personal-dashboard:v1` localStorage key; the theme preference uses `personal-dashboard:theme`.

### Project structure
```text
index.html             Accessible application shell
styles.css             Responsive theme and layout
src/app.js             Browser UI, persistence, timer and import/export
src/core.js            Pure-ish domain/state functions
tests/core.test.js     Node tests for state, habits, stats and backups
.github/workflows/ci.yml  Cross-platform CI
```

### Testing
Requires Node.js 20+ only for development tests; the application itself has no Node/runtime dependency.

```bash
npm test
```

CI runs the same test suite on Node 20 and 22 across Ubuntu, Windows, and macOS.

### Preview / screenshots
Run the local server and capture the full dashboard after adding representative non-sensitive tasks, habits, and notes. No screenshot is committed so the repository does not present fabricated user data as real.

### Privacy & security
All dashboard content remains in the current browser profile unless you explicitly export a backup. There are no network requests, analytics, accounts, cookies, or third-party scripts. `localStorage` is **not encrypted**: do not store passwords, access tokens, private keys, or highly sensitive notes. Exported JSON backups are also plain text.

### Limitations
- Data does not synchronize across browsers or devices.
- Closing/reloading the page stops an active focus timer; incomplete sessions are not credited.
- Focus duration is fixed at 25 minutes.
- Habits are daily only; there are no streak calculations or schedules.
- Import replaces the current dashboard state rather than merging it.
- Browser storage can be cleared by the user/browser, so export backups for important data.

### Optional roadmap
Potential future enhancements include configurable focus durations, streak summaries, merge-aware imports, and an installable offline PWA. These are not implemented today.

### Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md). Please keep changes local-first, dependency-light, tested, and accessible.

### License
MIT — see [LICENSE](LICENSE).

## العربية

### نظرة عامة
**Personal Dashboard** لوحة شخصية محلية تحافظ على الخصوصية وتجمع المهام والعادات اليومية والملاحظات السريعة وجلسات التركيز في صفحة واحدة. تعمل بالكامل داخل المتصفح ولا تحتاج إلى حساب أو خادم أو مفتاح API.

### لماذا هذا المشروع؟
تتوزع الخطط اليومية غالبًا بين تطبيقات متعددة. يوفر المشروع مجموعة صغيرة ومفيدة من الأدوات اليومية بواجهة متجاوبة مع إبقاء البيانات على جهاز المستخدم.

### المميزات
- إضافة المهام وإنجازها وإعادتها وحذفها.
- إنشاء عادات يومية وتسجيل إنجازها لليوم الحالي.
- ملاحظات سريعة متعددة الأسطر.
- مؤقت تركيز 25 دقيقة مع تسجيل الدقائق المكتملة.
- بطاقات ملخص للمهام والعادات ودقائق التركيز.
- تصدير واستيراد نسخة احتياطية JSON مع التحقق من صيغة النسخة.
- حفظ اختيار الوضع الفاتح أو الداكن.
- واجهة متجاوبة للحاسوب والهاتف.
- تخزين محلي فقط عبر `localStorage` ومن دون اتصالات شبكية.

### المتطلبات والتثبيت
يكفي متصفح حديث. للتطوير المحلي استخدم Python 3 أو أي خادم ملفات ثابت:

```bash
git clone https://github.com/rad03i2/personal-dashboard.git
cd personal-dashboard
python -m http.server 8000
```

ثم افتح `http://localhost:8000`.

### الاستخدام
أضف المهام والعادات والملاحظات من بطاقاتها. اضغط دائرة/علامة العنصر لتغيير حالة المهمة أو عادة اليوم. لا تُسجل جلسة التركيز إلا بعد اكتمال 25 دقيقة. استخدم **Export** لحفظ نسخة JSON و**Import** لاستعادتها.

### الإعداد
لا توجد متغيرات بيئة أو أسرار. تُحفظ بيانات التطبيق في المفتاح `personal-dashboard:v1` وتفضيل المظهر في `personal-dashboard:theme`.

### بنية المشروع والاختبارات
الواجهة في `index.html` و`styles.css`، ومنطق المتصفح في `src/app.js`، والمنطق القابل للاختبار في `src/core.js`، والاختبارات في `tests/core.test.js`. لتشغيل الاختبارات يلزم Node.js 20+:

```bash
npm test
```

ويشغّل CI الاختبارات على Ubuntu وWindows وmacOS باستخدام Node 20 و22.

### المعاينة
شغّل الخادم المحلي ثم التقط صورة للوحة بعد إدخال بيانات تجريبية غير حساسة. لم نضع لقطة ببيانات مستخدم وهمية تُعرض كأنها بيانات حقيقية.

### الخصوصية والأمان
لا توجد تحليلات أو حسابات أو مكتبات خارجية أو طلبات شبكة. التخزين المحلي والنسخ المصدرة **غير مشفرة**؛ لذلك لا تستخدم اللوحة لحفظ كلمات المرور أو الرموز السرية أو المفاتيح الخاصة أو المعلومات شديدة الحساسية.

### القيود
لا توجد مزامنة بين الأجهزة، وإغلاق الصفحة يوقف جلسة التركيز الجارية، ومدة التركيز ثابتة، والعادات يومية فقط، والاستيراد يستبدل الحالة الحالية بدل دمجها. كما يمكن حذف تخزين المتصفح، لذا احتفظ بنسخة مصدرة للبيانات المهمة.

### تطوير اختياري
يمكن مستقبلًا إضافة مدد تركيز قابلة للتخصيص، وإحصاءات streak، واستيراد بالدمج، ودعم PWA. هذه المزايا غير منفذة حاليًا.

### المساهمة والترخيص
راجع [CONTRIBUTING.md](CONTRIBUTING.md). المشروع مرخص بترخيص MIT؛ راجع [LICENSE](LICENSE).

## Author / المؤلف
**Radwan Abdulhadi Ahmed**  
**رضوان عبدالهادي أحمد**  
GitHub: [@rad03i2](https://github.com/rad03i2)
