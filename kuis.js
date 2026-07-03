/* =========================================================================
   KUIS.JS — Bank soal untuk menu "Kuis Statistika" pada StatCalc
   -------------------------------------------------------------------------
   Setiap soal berupa objek dengan struktur:
   {
     question:    teks soal (string, boleh mengandung angka/notasi sederhana)
     options:     array 4 pilihan jawaban (string)
     answer:      index (0-3) dari options yang merupakan jawaban benar
     pembahasan:  penjelasan singkat kenapa jawaban tersebut benar
   }

   Untuk menambah soal baru: cukup tambahkan objek baru ke array
   KUIS_STATISTIK di bawah ini, mengikuti struktur yang sama.
   ========================================================================= */
window.KUIS_STATISTIK = [
  {
    question: 'Data: 4, 8, 6, 5, 3, 7, 9. Berapakah mean (rata-rata) dari data tersebut?',
    options: ['5', '6', '7', '8'],
    answer: 1,
    pembahasan: 'Jumlah data = 4+8+6+5+3+7+9 = 42, dibagi banyak data (n=7), sehingga mean = 42/7 = 6.'
  },
  {
    question: 'Data terurut: 2, 4, 4, 6, 8, 9, 12. Berapakah median dari data tersebut?',
    options: ['4', '6', '8', '9'],
    answer: 1,
    pembahasan: 'Karena n=7 (ganjil), median adalah nilai tengah setelah data diurutkan, yaitu data ke-4 = 6.'
  },
  {
    question: 'Data: 3, 5, 5, 5, 7, 8, 8. Berapakah modus dari data tersebut?',
    options: ['5', '7', '8', '3'],
    answer: 0,
    pembahasan: 'Modus adalah nilai yang paling sering muncul. Nilai 5 muncul 3 kali, paling banyak dibanding nilai lain.'
  },
  {
    question: 'Ukuran yang menunjukkan seberapa jauh data tersebar dari nilai rata-ratanya disebut...',
    options: ['Modus', 'Median', 'Simpangan baku', 'Kuartil'],
    answer: 2,
    pembahasan: 'Simpangan baku (standar deviasi) mengukur seberapa jauh sebaran data terhadap rata-ratanya.'
  },
  {
    question: 'Jika varians suatu data adalah 25, maka simpangan bakunya adalah...',
    options: ['5', '25', '625', '12,5'],
    answer: 0,
    pembahasan: 'Simpangan baku adalah akar kuadrat dari varians: \u221A25 = 5.'
  },
  {
    question: 'Koefisien korelasi Pearson (r) memiliki rentang nilai...',
    options: ['0 sampai 1', '-1 sampai 1', '-100 sampai 100', '0 sampai 100'],
    answer: 1,
    pembahasan: 'Koefisien korelasi Pearson berkisar dari -1 (korelasi negatif sempurna) hingga +1 (korelasi positif sempurna).'
  },
  {
    question: 'Jika nilai korelasi antara dua variabel adalah r = -0,85, maka hubungan kedua variabel tersebut...',
    options: ['Positif sangat lemah', 'Negatif sangat kuat', 'Tidak ada hubungan', 'Positif sangat kuat'],
    answer: 1,
    pembahasan: 'Nilai r mendekati -1 menunjukkan hubungan negatif (berlawanan arah) yang sangat kuat antar variabel.'
  },
  {
    question: 'Dalam persamaan regresi linear \u0176 = a + bX, apa yang ditunjukkan oleh koefisien b?',
    options: ['Nilai Y ketika X = 0', 'Rata-rata data Y', 'Besarnya perubahan Y untuk setiap kenaikan 1 satuan X', 'Jumlah data yang digunakan'],
    answer: 2,
    pembahasan: 'Koefisien b (koefisien arah/slope) menunjukkan besar perubahan Y untuk setiap kenaikan 1 satuan X.'
  },
  {
    question: 'Koefisien determinasi R\u00B2 = 0,81 berarti...',
    options: [
      '81% variasi Y dijelaskan oleh variabel X dalam model',
      '81% data bernilai sama',
      'Korelasi antar variabel sebesar 0,81%',
      'Model regresi salah'
    ],
    answer: 0,
    pembahasan: 'R\u00B2 menunjukkan proporsi variasi variabel terikat (Y) yang mampu dijelaskan oleh variabel bebas (X) dalam model, dalam hal ini sebesar 81%.'
  },
  {
    question: 'Distribusi data yang berbentuk simetris seperti lonceng disebut distribusi...',
    options: ['Binomial', 'Normal', 'Poisson', 'Seragam'],
    answer: 1,
    pembahasan: 'Distribusi normal (distribusi Gauss) memiliki bentuk kurva simetris menyerupai lonceng.'
  },
  {
    question: 'Pada pengujian hipotesis, apa yang dimaksud dengan hipotesis nol (H\u2080)?',
    options: [
      'Hipotesis yang selalu benar',
      'Pernyataan yang menyatakan tidak ada perbedaan/pengaruh yang diuji',
      'Hipotesis alternatif yang diajukan peneliti',
      'Kesimpulan akhir penelitian'
    ],
    answer: 1,
    pembahasan: 'H\u2080 (hipotesis nol) adalah pernyataan awal yang menyatakan tidak ada perbedaan atau pengaruh, dan akan diuji apakah ditolak atau tidak berdasarkan data.'
  },
  {
    question: 'Jika nilai signifikansi (p-value) hasil uji lebih kecil dari taraf signifikansi \u03B1 = 0,05, maka keputusannya adalah...',
    options: ['Menerima H\u2080', 'Menolak H\u2080', 'Mengulang penelitian', 'Data tidak valid'],
    answer: 1,
    pembahasan: 'Jika p-value < \u03B1, maka H\u2080 ditolak karena hasil dianggap signifikan secara statistik.'
  },
  {
    question: 'Uji statistik yang digunakan untuk membandingkan rata-rata lebih dari dua kelompok data sekaligus adalah...',
    options: ['Uji t', 'Uji Chi-Square', 'ANOVA', 'Uji korelasi'],
    answer: 2,
    pembahasan: 'ANOVA (Analysis of Variance) digunakan untuk menguji perbedaan rata-rata dari tiga kelompok data atau lebih secara bersamaan.'
  },
  {
    question: 'Uji Chi-Square umumnya digunakan untuk data berskala...',
    options: ['Nominal atau ordinal (kategorik)', 'Interval saja', 'Rasio saja', 'Hanya data kontinu'],
    answer: 0,
    pembahasan: 'Uji Chi-Square dipakai untuk menguji data kategorik (nominal/ordinal), misalnya uji independensi antar dua variabel kategori.'
  },
  {
    question: 'Nilai tengah dari sekumpulan data yang telah diurutkan disebut...',
    options: ['Mean', 'Median', 'Modus', 'Range'],
    answer: 1,
    pembahasan: 'Median adalah nilai tengah data setelah diurutkan dari yang terkecil ke terbesar.'
  },
  {
    question: 'Selisih antara nilai maksimum dan minimum dalam suatu data disebut...',
    options: ['Rentang (range)', 'Varians', 'Standar deviasi', 'Kuartil'],
    answer: 0,
    pembahasan: 'Rentang (range) adalah selisih antara nilai data terbesar dan nilai data terkecil.'
  },
  {
    question: 'Dalam regresi linear berganda, istilah "ceteris paribus" pada interpretasi koefisien berarti...',
    options: [
      'Semua data harus sama',
      'Variabel bebas lainnya dianggap konstan/tetap',
      'Model tidak memiliki konstanta',
      'Data harus berdistribusi normal'
    ],
    answer: 1,
    pembahasan: 'Ceteris paribus berarti "hal-hal lain dianggap tetap" \u2014 variabel bebas lain diasumsikan konstan saat menginterpretasikan pengaruh satu variabel X.'
  },
  {
    question: 'Manakah pasangan variabel yang paling mungkin memiliki korelasi positif kuat?',
    options: [
      'Tinggi badan dan berat badan',
      'Warna baju dan nomor sepatu',
      'Suhu ruangan dan nama hari',
      'Jumlah huruf nama dan golongan darah'
    ],
    answer: 0,
    pembahasan: 'Tinggi badan dan berat badan cenderung meningkat bersama-sama, sehingga secara umum memiliki korelasi positif yang cukup kuat.'
  },
  {
    question: 'Statistik deskriptif digunakan untuk...',
    options: [
      'Menarik kesimpulan tentang populasi dari sampel',
      'Menguji hipotesis penelitian',
      'Meringkas dan menggambarkan karakteristik data yang ada',
      'Meramalkan nilai di masa depan'
    ],
    answer: 2,
    pembahasan: 'Statistik deskriptif berfungsi meringkas, menyajikan, dan menggambarkan karakteristik suatu kumpulan data (mis. mean, median, modus).'
  },
  {
    question: 'Semakin kecil nilai galat baku (standard error) suatu estimasi regresi, maka...',
    options: [
      'Model semakin buruk',
      'Prediksi model semakin tidak akurat',
      'Prediksi model semakin akurat/presisi',
      'Data semakin sedikit'
    ],
    answer: 2,
    pembahasan: 'Galat baku (Se) yang kecil menunjukkan nilai prediksi model semakin dekat dengan data observasi, sehingga model lebih akurat.'
  }
];
