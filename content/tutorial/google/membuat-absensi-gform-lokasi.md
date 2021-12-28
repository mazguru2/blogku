---
title : "Cara Membuat Presensi Online Google Form dengan Fitur Geolocation"
description : "Membuat Presensi Online menggunakan Google Form dengan geolocation. Google telah memberikan fasilitas ini untuk dapat dimanfaatkan sebagai media belajar dan pembelajaran, termasuk dalam hal administrasi sekolah. Sebenarnya banyak hal yang bisa dilakukan dengan google form, salah satunya adalah presensi Online. Tujuannya untuk memudahkan pengajar dalam mengabsen peserta didik dalam kelas  dan hasilnya dapat dilihat oleh pimpinan atau rekan-rekan pegajar yang membutuhkan, utamanya sebagai laporan hasil presensi online peserta didik."
date : 2021-08-30T09:28:23+07:00
featured : false
draft : false
comment : true
toc : true
reward : false
keywords : 
  - presensi online google form
  - presensi dengan gps
  - google form
  - Cara Membuat Presensi Online Google Form dengan Fitur Geolocation
kategori : 
  - Tutorial
topik :
  - presensi online
  - google form
seri : 
  - Belajar
images : 
  - images/tutorial/membuat-google-form-cover.jpg
cover : 
  - images/cover/default.png
---
Di masa pandemi Covid-19 yang meluas dan implementasi PPKM di beberapa daerah di Indonesia, membuat hampir di seluruh lembaga pendidikan menerapkan Belajar Dari Rumah (BDR). Hal ini mendorong para pengajar harus lebih pandai dalam memikirkan cara bagaimana pembelajaran tatap muka bisa tetap diterapkan ke dalam pembelajar di rumah.

Banyak dari pendidik kesulitan dalam memantau kehadiran/presensi peserta didik. Presensi sendiri sebagai acuan kehadiran peserta didik telah berevolusi dari waktu ke waktu. Biasanya, mungkin sistem presensi dilakukan dengan finger print dan presensi manual di kelas. Namun di masa ini, presensi manual dan finger print menjadi tidak relevan dikarenakan peserta didik belajar di rumah.

## Kemudahan Presensi Online

Untuk mengatasi hal ini, ada satu solusi yang juga banyak diterapkan oleh para pengajar di tengah-tengah pandemi ini, yakni Presensi Online menggunakan Google Form. Google telah memberikan fasilitas ini untuk dapat dimanfaatkan sebagai media belajar dan pembelajaran, termasuk dalam hal administrasi sekolah. Sebenarnya banyak hal yang bisa dilakukan dengan google form, salah satunya adalah presensi Online. Tujuannya untuk memudahkan pengajar dalam mengabsen peserta didik dalam kelas  dan hasilnya dapat dilihat oleh pimpinan atau rekan-rekan pegajar yang membutuhkan, utamanya sebagai laporan hasil presensi online peserta didik.

Nah, namun ada satu hal yang cukup menjadi permasalahannya saat ini. Yaitu titip absen. Namun, kita bisa menyiasatinya dengan meminta peserta didik untuk selalu berbagi lokasi setiap melakukan presensi. Bagaimana bisa menerapkannya di Google Form? Kita bisa menggunakan GeoLocation pada presensi online, namun caranya tergolong sulit. Tapi, kita bisa tinggal *copy-paste* saja pemrogramannya tanpa perlu memikirkan alur dan belajar coding dulu.

## Bagaimana caranya? Ikuti langkah berikut
### Membuat form di google
1. buka **[https://docs.google.com/forms](https://docs.google.com/forms)**
2. Jika belum login, login terlebih dahulu kemudian akan muncul seperti tampilan gambar berikut
![Membuat Google Form](/images/tutorial/membuat-google-form.jpg)
3. Untuk membuat formulir baru, klik pada bagian kotak Kosong dengan icon tambah
4. Kemudian, isi bagian-bagian dari formulir. Contohnya seperti ini,
    \
    ![Membuat Google Form](/images/tutorial/membuat-google-form-2.png)
    \
    Unique ID digunakan untuk verifikasi

### Membuat Fitur GeoLocation
1. Buat spreadsheet pada tab jawaban
![Membuat Google Form](/images/tutorial/membuat-google-form-3.jpg)
![Membuat Google Form](/images/tutorial/membuat-google-form-4.jpg)
2. Setelah masuk ke google spreeadsheet buat sheet baru dan beri nama dengan misalkan "INFO RESPONDER"
3. Klik alat pilih editor script
![Membuat Google Form](/images/tutorial/membuat-google-form-5.jpg)
4. Pada file skrip Kode.gs , hapus semua skrip di dalamnya. Dan ganti dengan skrip dibawah ini
    ```java
    function orgIP(ip) {
      var url = "http://ipinfo.io/"+ ip +"?token=12f70b0a35a87f";
      var response = UrlFetchApp.fetch(url);
      var json = JSON.parse(response.getContentText());
      return json.org;
    }

    function cekIP() {
      var url = "http://api.ipify.org/?format=json";
      var response = UrlFetchApp.fetch(url);
      var json = JSON.parse(response.getContentText());
      return json.ip;
    }

    function doGet(request) {
      var template = HtmlService.createTemplateFromFile('Index')
      var pageData = template.evaluate()
      .setTitle("Form")
      .addMetaTag("viewport","width=device-width, initial-scale=1")
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      return pageData;
    }

    /* @Include JavaScript and CSS Files */
    function include() {
      var HTMLString = "<input type='text' class='form-control' id='ip' value='"+ cekIP() +"' readonly>";
      HTMLOutput = HtmlService.createHtmlOutput(HTMLString);
      return HTMLOutput.getContent();
    }
    
    /* @Process */
    function processForm(x,y,z) {
      var url = "ALAMATSPREADSHEET##gid=0";
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("#GANTI DENGAN SHEET2 YANG DIBUAT");
      var lokasi = Maps.newGeocoder().reverseGeocode(y, z);
      alamat= lokasi.results[0].formatted_address;
      
      ws.appendRow([x,cekIP(),orgIP(cekIP()),y,z,alamat]);
    }
    ```
    Jangan lupa pada baris 34 dan 36 isi sesuai dengan spreadsheet
    ```
    34  var url = "#GANTI DENGAN ALAMAT SPREADSHEET";
    35  var ss = SpreadsheetApp.openByUrl(url);
    36  var ws = ss.getSheetByName("#GANTI DENGAN SHEET2 YANG DIBUAT");
    ```
    untuk alamat spreadsheet silahkan buka spreadsheet kemudian pilih bagikan kepada siapa saja yang memiliki link, set sebagai editor 
    ![Membuat Google Form](/images/tutorial/membuat-google-form-6.jpg)
5. Kemudian jangan lupa untuk menyimpannya dengan klik Ctrl + S
6. Kedua, buat file skrip baru dengan mengklik menu File » Baru » File HTML
  ![Membuat Google Form](/images/tutorial/membuat-google-form-7.jpg)
7. Beri nama file baru ini dengan nama **Index** (I kapital ya) kemudian klik **OK**
  ![Membuat Google Form](/images/tutorial/membuat-google-form-8.jpg)
8. Masukkan skrip berikut ini ke dalam file skrip index
    ```HTML
    <!DOCTYPE html>
    <html>
    <head>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <style>
    body {
      background-color: #E6E6FA;
    }
    </style>
    </head>
    <body onload="getLocation()">
        <div class='container'>
                    <form>
                    <center><img src="https://www.sinmat.my.id/images/icon_math.svg" alt="Sinau Matematika"></center>
            <h1 class="text-center" style="font-family:verdana; color:#7D3C98;">ABSENSI Matematika SMA SINMAT</h1>
                        <p class='h4 mb-4 text-center'>Klik 'Mulai' untuk melanjutkan!!</p>
                        <p>Aktifkan GPS SmartPhone kita dan izinkan akses lokasi untuk mendapatkan unique id, silakan reload jika anda belum mengizinkan akses lokasi.</p>
                        <div class='form-group'>
                            <label for='ip'><span class="badge badge-primary">IP Address:</span></label>
                            <?!= include(); ?>
                        </div>
                        <div class='form-group'>
                            <label for='unik'><span class="badge badge-primary">Unique ID:</span></label><p>silahkan salin/tulis pada kerrtas unique id anda untuk proses verifikasi jawaban anda nanti/selanjutnya.</p>
                            <input type='text' class='form-control' id='unik' readonly required>
                        </div>
                        <a type="button" class="btn btn-primary" href='##GANTI DENGAN ALAMAT GOOGLE FORM' target='_blank'>Mulai</a>
                    </form>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        <script>
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          }
        }

        function makeid() {
          var result           = '';
          var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          var charactersLength = characters.length;
          for ( var i = 0; i < 7; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));          
          }
          document.getElementById("unik").value = result;
          return result;
        }

        function showPosition(position) {
            google.script.run.processForm(makeid(),position.coords.latitude,position.coords.longitude);
        }
        </script>
    </body>
    </html>
    ```
    Pada baris 141  `<a type="button" class="btn btn-primary" href='##GANTI DENGAN ALAMAT GOOGLE FORM' target='_blank'>Mulai</a>` ganti dengan alamat google form
    ![Membuat Google Form](/images/tutorial/membuat-google-form-9.jpg)
    hal ini dilakukan untuk mengarahkan ke form kita setelah kita masuk ke lokasi index.
9. Setelah selesai, jangan lupa menyimpannya
10. Selanjutnya kita akan mem-build skrip ini menjadi sebuah aplikasi web. Caranya klik menu **Publikasikan » Terapkan sebagai aplikasi web** … 
    ![Membuat Google Form](/images/tutorial/membuat-google-form-11.jpg)
11. Akan muncul tampilan seperti ini, pertama ubahlah pada bagian *Who has access to the app* menjadi *Anyone, even anonymous*. Klik **Deploy**
    ![Membuat Google Form](/images/tutorial/membuat-google-form-10.jpg)
12. Google script akan meminta izin, pada tampilan ini, klik **Review Permissions**
13. Pilih akun google kita, dan ketika muncul seperti ini, klik Lanjutan dan Buka Coba 
14. Dan klik Izinkan ketika aplikasi yang akan kita buat ingin mengakses akun google kita
15. Setelah selesai, akan muncul link aplikasi web kita, link inilah yang akan kita bagikan kepada pengguna/siswa
    ![Membuat Google Form](/images/tutorial/membuat-google-form-12.jpg)

### Uji Coba
1. Pergi ke alamat link yang didapat tadi melalui web browser. akan Muncul tampilan seperti gambar
    ![Membuat Google Form](/images/tutorial/membuat-google-form-13.jpg)
2. Lihat pada spreadsheet kita cek apakah masuk ke form dan info responder
    ![Membuat Google Form](/images/tutorial/membuat-google-form-15.jpg)
3. Kita bisa menambahkan rumus index match pada spreadsheet kita untuk mencari alamat atau koordinat lokasinya misalkan `=INDEX('INFO RESPONDER'!$F$1:$F$1000;MATCH(C2;'INFO RESPONDER'!$A$1:$A$1000;0))`
    ![Membuat Google Form](/images/tutorial/membuat-google-form-14.jpg)
4. Jika link terlalu panjang kita bisa memperpendek dengan menggunakan **[bit.ly](https://bit.ly)** untuk memperpendek link kita

**Seperti itulah tutorial bagaimana membuat presensi online dengan fitur geolokasi. Ini dimungkinkan untuk presensi yang dilakukan bersama-sama**