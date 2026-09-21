# Security Policy / سياسة الأمان

Personal Dashboard is a local-only browser application. It makes no network requests and has no authentication layer or backend.

## Reporting
Please report security issues privately to the maintainer through an appropriate private GitHub contact channel rather than publishing exploit details in a public issue.

## Data model
Dashboard content is stored in browser `localStorage` and exported backups are plain JSON. Neither is encrypted. Never store passwords, access tokens, private keys, recovery codes, or highly sensitive personal information in this application.

Imported backups are parsed as data and rendered using text escaping; imports replace the current local dashboard state.

## العربية
التطبيق محلي ولا يرسل البيانات إلى الشبكة. بيانات `localStorage` ونسخ JSON الاحتياطية غير مشفرة، لذلك لا تحفظ كلمات المرور أو الرموز أو المفاتيح الخاصة أو المعلومات شديدة الحساسية. أبلغ عن الثغرات بصورة خاصة بدل نشر تفاصيل الاستغلال علنًا.

Maintainer: Radwan Abdulhadi Ahmed / @rad03i2
