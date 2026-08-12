TROÇKİ WEB V13 - ÇEVRİMİÇİ FOTOĞRAF GALERİSİ

Bu sürüm Supabase Storage kullanır. Supabase Storage dosyaları internetten sunabilir; public bucket için getPublicUrl kullanılabilir. Yükleme/silme işlemleri Storage RLS politikalarıyla sınırlandırılmalıdır.

KURULUM:
1) Supabase'te bir proje oluştur.
2) Storage > New bucket > "trocki-gallery" oluştur.
3) Bucket'ı fotoğrafların herkes tarafından görüntülenmesini istiyorsan Public yap.
4) Yükleme ve silme işlemlerini sadece senin yapmanı istiyorsan Supabase Auth + Storage RLS policy kullan.
5) Project Settings > API'den Project URL ve publishable/anon key'i al.
6) supabase-config.js içindeki iki placeholder'ı bunlarla değiştir.
7) service_role/secret key'i asla tarayıcı koduna koyma.
8) ZIP içeriğini Netlify'a deploy et.

NOT:
Bu ZIP'te gerçek Supabase proje bilgileri bilerek boş bırakılmıştır. Bu bilgiler olmadan site internete ortak galeri olarak bağlanamaz.
