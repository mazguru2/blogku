---
title : "Persamaan Logaritma Lanjut dan Contohnya"
description : "Persamaan logaritma adalah persamaan yang numerusnya mengandung variabel dan tidak menutup kemungkinan bilangan pokok atau basisnya juga mengandung variabel."
date : 2021-11-16T18:55:58+07:00
featured : false
draft : false
comment : true
toc : true
reward : false
keywords : 
  - matematika
  - logaritma
  - aljabar
  - persamaan logaritma
  - contoh persamaan logaritma
  - persamaan logaritma sederhana
  - latihan soal persamaan logaritma
  - soal persamaan logaritma
kategori : 
  - Aljabar
topik :
  - logaritma
  - persamaan logaritma
seri : 
  - Matematika SMA
images : 
 - images/matsma/logaritma/persamaan.jpg
cover : 
  - images/matsma/logaritma/cover.jpg
---
Setelah sebelumnya belajar persamaan logaritma sederhana, kita lanjutkan pembahasantentang persamaan logaritma lanjut. 
Beberapabentuk yang akan kita bahas pada artikel ini.

Untuk $ a, b \in R , a &gt; 0 ,  b &gt; 0 ,   $ dan $ a \neq 1 ,  $ berlaku sifat-sifat persamaan logaritma berikut : 
1. $ {}^{h(x)} \log f(x) = {}^{h(x)} \log g(x) ,  $ maka $ f(x) = g(x) $  
 dengan syarat : $ f(x) &gt; 0,  g(x) &gt; 0 ,  h(x) &gt; 0,  $ dan $ h(x) \neq 1 $ 
2. $ {}^{f(x)} \log b = {}^{g(x)} \log b ,  $ maka $ f(x) = g(x) $  
 dengan syarat : $ b &gt; 0 , f(x) &gt; 0 , f(x) \neq 1, g(x) &gt; 0 ,   $ dan $ g(x) \neq 1 $ 
3. $ {}^{f(x)} \log h(x) = {}^{g(x)} \log h(x) ,  $ maka semua yang memenuhi 
    1. $ f(x) = g(x)  $  
    2. $ h(x) = 1  $  
dengan syarat : $ h(x) &gt; 0 ,  f(x) &gt; 0 ,  f(x) \neq 1,  g(x) &gt; 0 ,   $ dan $ g(x) \neq 1 $
4. Bentuk  $A[^a\log x ]^2  +  B[ ^a \log x ]  + C  = 0 $  
Solusinya dengan mengubah persamaan logaritma ke dalam bentuk persamaan
kuadrat dengan memisalkan  $^a\log x = P.$

Untuk lebih mudah dalam memahami sifat-sifat persamaan logaritma, mari kita lihat contoh-contoh soal berikut : 

## 1. Bentuk $ {}^{h(x)} \log f(x) = {}^{h(x)} \log g(x)$
### Contoh 1
Tentukan nilai $ x  $ yang memenuhi persamaan   
$ {}^{3x-5} \log (2x+1) = {}^{3x-5} \log (x+3) $ ?

**Penyelesaian :**  
Berdasarkan sifat persamaan $ {}^{h(x)} \log f(x) = {}^{h(x)} \log g(x) $  
Diketahui $h(x) = 3x-5,   f(x) = 2x+1  $ dan $ g(x) = x+3  $  
Maka $ f(x) = g(x)  $ dan syarat $ f(x) &gt; 0,  g(x) &gt; 0,  h(x) &gt; 0,  h(x) \neq 1 $ 

$$\begin{align*}
f(x) &= g(x) \\\\ 2x+1 &= x+3 \\\\ 2x - x &= 3-1 \\\\ x &= 2 
\end{align*}$$

Cek syarat untuk $ x = 2 $   
$ x = 2 \rightarrow h(x) = 3x-5 \rightarrow h(2) = 3.2 - 5 = 1 &gt; 0 $  
Karena untuk $ x = 2 ,  $ diperoleh nilai $ h(x) = 1 ,  $ sementara syaratnya haruslah $ h(x) \neq 1 ,  $ ini artinya $ x = 2  $ tidak memenuhi syarat.  
Sehingga tidak ada nilai $ x  $ yang memenuhi persamaan logaritma tersebut (tidak ada solusi atau jawabannya himpunan kosong).  
**Catatan :** Nilai $ x  $ yang diperoleh harus memenuhi semua syarat yang ada, jika salah satu saja ada syarat yang tidak terpenuhi, maka bisa dikatakan nilai $ x  $ tersebut gagal menjadi solusi persamaan logaritmanya.  
Jadi, tidak ada nilai $ x  $  yang memenuhi persamaan. $ \heartsuit $ 

## 2. Bentuk $ {}^{f(x)} \log b = {}^{g(x)} \log b$
### Contoh 2 
Tentukan nilai $ x  $ yang memenuhi persamaan 
$ {}^{x^2 + 6x} \log (\frac{1}{3}) = {}^{2x+5} \log (\frac{1}{3}) $ ?

**Penyelesaian :**  
Berdasarkan sifat persamaan $ {}^{f(x)} \log b = {}^{g(x)} \log b  $  
Diketahui: $ f(x) = x^2 + 6x  $ dan $ g(x) = 2x+5  $  
Maka $ f(x) = g(x)  $ dan syarat $ f(x) &gt; 0 ,  f(x) \neq 1,  g(x) &gt; 0,  f(x) \neq 1 $   
**Solusi**
$$\begin{align*}
f(x) &= g(x) \\\\ x^2 + 6x &= 2x+5 \\\\ x^2 + 4x - 5 &= 0 \\\\ (x-1)(x+5) &= 0 \\\\ x = 1 \vee  x &=  -5 
\end{align*}$$

**Cek syarat** untuk $ x = 1   $ dan $ x = -5 $  
- Untuk $ x = 1 $  
$  f(x) = x^2 + 6x \rightarrow f(1) = 1^2 + 6.1 = 7 &gt; 0 $  
$  g(x) = 2x+5 \rightarrow g(1) = 2.1+5 = 7 &gt; 0 $  
nilai $ x = 1  $ memenuhi syarat. 
- Untuk $ x = -5 $  
$  f(x) = x^2 + 6x \rightarrow f(-5) = (-5)^2 + 6.(-5) = -5 &lt; 0 $  
$  g(x) = 2x+5 \rightarrow g(1) = 2.(-5)+5 = -5 &lt; 0 $  
nilai $ x = -5  $ tidak memenuhi syarat. 

Sehingga yang memenuhi syarat adalah $ x = 1 $ .  
Jadi, nilai $ x = 1  $ yang memenuhi persamaan. $ \heartsuit $ 

## 3. Bentuk $ {}^{f(x)} \log h(x) = {}^{g(x)} \log h(x)$
### Contoh 3 

Tentukan nilai $ x  $ yang memenuhi persamaan  
$ {}^{2x^2-3x+1} \log (2x-1) = {}^{x^2+2x-5} \log (2x-1) $ ?

**Penyelesaian :**
Berdasarkan sifat persamaan $ {}^{f(x)} \log h(x) = {}^{g(x)} \log h(x) $  
Diketahui: $h(x) = 2x-1,   f(x) = 2x^2-3x+1  $ dan $ g(x) = x^2+2x-5  $  
Maka $ f(x) = g(x)  $ dan $ h(x) = 1 ,  $  
dengan syarat $ h(x) &gt; 0 ,  f(x) &gt; 0 ,  f(x) \neq 1,  g(x) &gt; 0 ,   $ dan $ g(x) \neq 1 $  

- Solusi pertama :  
$$\begin{align*}
f(x) &= g(x) \\\\ 2x^2-3x+1 &= x^2+2x-5 \\\\ x^2 - 5x + 6 &= 0 \\\\ (x-2)(x-3) &= 0 \\\\ x = 2 \vee x &= 3
\end{align*}$$
Cek untuk nilai $ x = 2  $ dan $ x = 3 $  
untuk $ x = 2 $  
$ h(x) = 2x-1 \rightarrow h(2) = 2.2 - 1 = 3  $ (memenuhi)  
$ f(x) = 2x^2-3x+1 \rightarrow f(2) = 2.2^2-3.2+1 = 3  $ (memenuhi)  
$ g(x) = x^2+2x-5 \rightarrow g(2) = 2^2+2.2-5 = 3  $ (memenuhi)  
untuk $ x = 3 $  
$ h(x) = 2x-1 \rightarrow h(3) = 2.3 - 1 = 5  $ (memenuhi)  
$ f(x) = 2x^2-3x+1 \rightarrow f(3) = 2.3^2-3.3+1 = 10  $ (memenuhi)  
$ g(x) = x^2+2x-5 \rightarrow g(2) = 3^2+2.3-5 = 10  $ (memenuhi)  
Artinya untuk nilai $ x = 2  $ dan $ x = 3  $ memenuhi syarat sebagai solusi dari persamaannya. 
- Solusi kedua : $ h(x) = 1 $   
$$\begin{align*}
h(x) &= 1 \\\\ 2x-1 &= 1 \\\\ 2x &= 2 \\\\ x &= 1
\end{align*}$$
Cek untuk nilai $ x = 1 $  
untuk $ x = 2 $  
$ f(x) = 2x^2-3x+1 \rightarrow f(1) = 2.1^2-3.1+1 = 1  $ (TM)  
$ g(x) = x^2+2x-5 \rightarrow g(1) = 1^2+2.1-5 = -2  $ (TM)  
Artinya nilai $ x = 1  $ tidak memenuhi syarat atau nilai $ x = 1  $ tidak sebagai solusi dari persamaan.  
Jadi, penyelesaiannya adalah $ x = 2  $ dan $ x = 3 .  \heartsuit $ 

## 4. Bentuk $A[^a\log x ]^2  +  B[ ^a \log x ]  + C  = 0 $
### Contoh 4 
Tentukan himpunan penyelesaian dari persamaan  
$^3 \log^2 x –^3 \log x^5 + 4 = 0 $
 
**Penyelesaian :**  
$$\begin{align*}
^3 \log^2 x – ^3 \log x^5 + 4 = 0 \\\\ (^3\log x)^2  – 5. (^3\log x)  + 4 = 0 \\\\ \text{Misalkan} ^3\log x=P \text{ maka} \\\\ P^2-5P+4=0 \\\\ (P-4)(P-1)=0
\end{align*}$$

$$
P=4 \text{ atau } P=1 \\\\ {}^3\log x=4 \text{ atau } ^3\log x=1 \\\\ x=3^4 \text{ atau } x=3^1\\\\ x=81 \text{ atau } x=1
$$
Jadi,  himpunan penyelesaiannya adalah  { 3, 81 } 
