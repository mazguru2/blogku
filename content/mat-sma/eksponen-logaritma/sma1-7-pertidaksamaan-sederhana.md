---
title : "Pertidaksamaan Eksponen Sederhana"
description : Pertidaksamaan eksponen sederhana maksudnya pertidaksamaan yang ruas kanan dan ruas kiri tanda pertidaksamaan sudah berbentuk pangkat.
date : 2021-09-06T16:53:34+07:00
featured : false
draft : false
comment : true
toc : false
reward : false
keywords : 
  - matematika
  - eksponen
  - aljabar
  - Pertidaksamaan Eksponen
  - Pertidaksamaan eksponen lanjut
kategori : 
  - Aljabar
topik :
  - Eksponen
  - Fungsi Eksponen
  - Pertidaksamaan Eksponen
seri : 
  - Matematika SMA
images : 
 - images/matsma/pertidaksamaan-eksponen.png
cover : 
  - images/cover/cover-eksponen.png
---
Setelah kita mempelajari tentang persamaan eksponen, sekarang pembahasan akan dilanjutkan dengan pertidaksamaan eksponen. Pertidaksamaan pasti memuat tanda $<,>,\le ,\ge $. Untuk menyelesaikan pertidaksamaan eksponen, kita harus benar-benar memahami sifat-sifat eksponen dan persamaan eksponen. Pertidaksamaan eksponen itu sendiri ada dua bentuk, yaitu pertidaksamaan eksponen sederhana dan pertidaksamaan eksponen lanjut.

## Pertidaksamaan eksponen sederhana. 

Pertidaksamaan eksponen sederhana maksudnya pertidaksamaan yang ruas kanan dan ruas kiri tanda pertidaksamaan sudah berbentuk pangkat. Dari berbagai bentuk pertidaksamaan eksponen yang ada, cara penyelesaiannya mengikuti langkah-langkah: 
- menentukan akar-akarnya, 
- menentukan garis bilangan dan tandanya, dan 
- menentukan himpunan penyelesaiannya.  

Hal ini juga bergantung pada bentuknya.

Untuk menyelesaikan pertidaksamaan eksponen, maari kita ingngat kembali sifat monoton naik dan monoton turun fungsi eksponen. Berdasarkan sifat fungsi eksponen tersebut maka untuk menyelesaikan pertidaksamaan eksponen dapat menggunakan ketentuan sebagai berikut.

> Untuk $a\in R$, serta fungsi $f(x)$ dan $g(x)$, dapat dibentuk pertidaksamaan ${{a}^{f(x)}}>{{a}^{g(x)}}$ atau ${{a}^{f(x)}}\ge {{a}^{g(x)}}$ atau ${{a}^{f(x)}}<{{a}^{g(x)}}$ atau ${{a}^{f(x)}}\le {{a}^{g(x)}}$. Bentuk pertidaksamaan tersebut dapat diselesaikan bergantung dari nilai basisnya.

### Untuk  $a>1$(sifat monoton naik), tanda pertidaksamaannya tetap
>- Jika ${{a}^{f(x)}}>{{a}^{g(x)}}$, maka $f(x)>g(x)$
>- Jika ${{a}^{f(x)}}\ge {{a}^{g(x)}}$, maka $f(x)\ge g(x)$
>- Jika ${{a}^{f(x)}}<{{a}^{g(x)}}$, maka $f(x)<g(x)$
>- Jika ${{a}^{f(x)}}\le {{a}^{g(x)}}$, maka $f(x)\le g(x)$
### Untuk $0<a<1$ (sifat monoton turun), tanda pertidaksamaannya berubah
>-	Jika ${{a}^{f(x)}}>{{a}^{g(x)}}$, maka $f(x)<g(x)$
>-	Jika ${{a}^{f(x)}}\ge {{a}^{g(x)}}$, maka $f(x)\le g(x)$
>-	Jika ${{a}^{f(x)}}<{{a}^{g(x)}}$, maka $f(x)>g(x)$
>-	Jika ${{a}^{f(x)}}\le {{a}^{g(x)}}$, maka $f(x)\ge g(x)$

**Contoh 1**

Tentukan himpunan penyelesaian dari
1)	${{8}^{2x-3}}\le 128$
2)	${{9}^{x-3}}>{{27}^{2x-1}}$

**Alternatif Penyelesaian**
1)	${{8}^{2x-3}}\le 128$  
    ${{\left( {{2}^{3}} \right)}^{2x-3}}\le {{2}^{7}}$  
    ${{2}^{6x-9}}\le {{2}^{7}}$  
    (basisnya $a=2>1$, tanda pertidaksamaannya tetap)  
    Maka $$6x-9\le 7 \newline 6x \le 16 \newline x\le \frac{16}{6}\newline x\le \frac{8}{3}$$

    Jadi himpunan penyelesaiannya adalah $x\le \frac{8}{3}$
2)	${{9}^{x-3}}>{{27}^{2x-1}}$  
    ${{\left( {{3}^{2}} \right)}^{x-3}}>{{\left( {{3}^{3}} \right)}^{2x-1}}$  
    ${{3}^{2x-6}}>{{3}^{6x-3}}$  
    Maka $$2x-6>6x-3 \newline 2x-6x>6-3 \newline -4x>3 \newline  4x<-3 \newline  x<-\frac{3}{4}$$
    Jadi himpunan penyelesaiannya adalah $x<-\frac{3}{4}$

**Contoh 2**
Tentukan himpunan penyelesaian dari
1)	${{\left( \frac{1}{27} \right)}^{1-x}}\le {{\left( \frac{1}{3} \right)}^{x-2}}$
2)	${{\left( \frac{1}{8} \right)}^{3x+2}}\ge {{\left( \frac{1}{4} \right)}^{4x-5}}$

**Alternatif Penyelesaian**
1)	${{\left( \frac{1}{27} \right)}^{1-x}}\le {{\left( \frac{1}{3} \right)}^{x-2}}$
    ${{\left( {{\left( \frac{1}{3} \right)}^{3}} \right)}^{1-x}}\le {{\left( \frac{1}{3} \right)}^{x-2}}$  
    ${{\left( \frac{1}{3} \right)}^{3-3x}}\le {{\left( \frac{1}{3} \right)}^{x-2}}$  
    
    (basisnya $a=\frac{1}{3},0<a<1$, tanda pertidaksamaannya berubah/dibalik)   
    Maka $$3-3x\ge x-2 \newline -3x-x\ge -2-3 \newline -4x\ge -5 \newline 4x\le 5 \newline x\le \frac{5}{4}$$
    Jadi himpunan penyelesaiannya adalah $x\le \frac{5}{4}$
2)	${{\left( \frac{1}{8} \right)}^{3x+2}}\ge {{\left( \frac{1}{4} \right)}^{4x-5}}$  
    ${{\left( {{\left( \frac{1}{2} \right)}^{3}} \right)}^{3x+2}}\ge {{\left( {{\left( \frac{1}{2} \right)}^{2}} \right)}^{4x-5}}$  
    ${{\left( \frac{1}{2} \right)}^{9x+6}}\ge {{\left( \frac{1}{2} \right)}^{8x-10}}$  
    Maka $$9x+6\le 8x-10 \newline x\le -16$$
    Jadi himpunan penyelesaiannya adalah $x\le -16$

**Contoh 3**

Tentukan himpunan penyelesaian dari
1)	${{2}^{{{x}^{2}}-x+1}}\le {{4}^{x+\frac{5}{2}}}$
2)	${{\left( \frac{1}{3} \right)}^{3x+1}}>{{\left( \frac{1}{27} \right)}^{\frac{1}{3}{{x}^{2}}-3}}$

**Alternatif Penyelesaian**
1)	${{2}^{{{x}^{2}}-x+1}}\le {{4}^{x+\frac{5}{2}}}$
    ${{2}^{{{x}^{2}}-x+1}}\le {{\left( {{2}^{2}} \right)}^{x+\frac{5}{2}}}$  
    ${{2}^{{{x}^{2}}-x+1}}\le {{2}^{2x+5}}$  
    (basisnya $a=2>1$, tanda pertidaksamaannya tetap)  
    Maka $${{x}^{2}}-x+1\le 2x+5 \newline {{x}^{2}}-3x-4\le 0 \newline (x-4)(x+1)\le 0$$
    Asumsi $x=4$ atau $x=-1$  
    Uji dengan garis bilangan
    ![Uji garis bilangan](/images/matsma/eksponen/gabil1.png "Uji dengan garis bilangan")
    Sehingga $-1\le x\le 4$  
    Jadi himpunan penyelesaiannya adalah $\\{x|-1\le x\le 4\\}$
2)	${{\left( \frac{1}{3} \right)}^{3x+1}}>{{\left( \frac{1}{27} \right)}^{\frac{1}{3}{{x}^{2}}-3}}$  
    ${{\left( \frac{1}{3} \right)}^{3x+1}}>{{\left( {{\left( \frac{1}{3} \right)}^{3}} \right)}^{\frac{1}{3}{{x}^{2}}-3}}$  
    ${{\left( \frac{1}{3} \right)}^{3x+1}}>{{\left( \frac{1}{3} \right)}^{{{x}^{2}}-9}}$  
    (basisnya $a=\frac{1}{3}<1$, tanda pertidaksamaannya berubah)  
    Maka $$3x+1<{{x}^{2}}-9 \newline -{{x}^{2}}+3x+10<0 \newline {{x}^{2}}-3x-10>0 \newline (x-5)(x+2)>0$$
    Asumsi $x=5$ atau $x=-2$  
    Uji dengan garis bilangan  
    ![Uji garis bilangan](/images/matsma/eksponen/gabil2.png "Uji dengan garis bilangan")
    Sehingga $x<-2$ atau $x>5$  
    Jadi himpunan penyelesaiannya adalah $\\{x|x<-2\text{ atau }x>5\\}$