
import { SubjectType } from '../types';

export interface NoteChapter {
  title: string;
  category?: string;
  content: string;
}

export const STUDY_NOTES: Record<string, NoteChapter[]> = {
  [SubjectType.SCIENCE]: [
    {
      title: "Chapter 1: Biodiversity",
      content: `### Page 1: What is Biodiversity?
Biodiversity is the diversity of organisms, such as microorganisms, animals or plants.
[DIAGRAM]
🌍 **BIOSPHERE**
 └─ 🍄 Microorganisms
 └─ 🌿 Plants (Producers)
 └─ 🦁 Animals (Consumers)

### Page 2: Importance of Biodiversity
1. **Sources of Food**: Plants and animals provide food.
2. **Balance of Nature**: Cycling of O2 and CO2.
3. **Medical Research**: Herbs and plants for medicine.
[TIP] 💡 KBAT: Malaysia is 1 of the 12 "Megabiodiverse" nations!

### Page 3: Management of Biodiversity
- Prohibiting the killing of endangered species.
- Reforestation (Planting new trees).
- Creating marine parks and forest reserves.

### Page 4: Classification of Organisms (Vertebrates I)
Vertebrates are animals with backbones.
[DIAGRAM]
🐟 **FISH**
- Poikilothermic (Cold-blooded)
- Gills for breathing
- Covered in scales

### Page 5: Classification (Vertebrates II)
🐸 **AMPHIBIANS**
- Poikilothermic
- Live on land and water
- Moist skin (no scales)
- Breath through lungs and moist skin

### Page 6: Classification (Vertebrates III)
🐍 **REPTILES**
- Poikilothermic
- Produce eggs with shells
- Breath through lungs
- Dry skin and scales

### Page 7: Classification (Vertebrates IV)
🐦 **BIRDS**
- Homoiothermic (Warm-blooded)
- Body covered in feathers
- Breath through lungs
- Wings for flight

### Page 8: Classification (Vertebrates IV)
🐘 **MAMMALS**
- Homoiothermic
- Body covered in hair/fur
- Give birth to live young
- Produce milk for young

### Page 9: Invertebrates (Without Legs)
- **Without segments**: Snails, Corals.
- **With segments**: Earthworms, Leeches.

### Page 10: Invertebrates (With Legs)
[DIAGRAM]
🐜 **ARTHROPODS**
├─ 3 pairs: Insects (Ants, Bees)
└─ More than 3 pairs: Spiders, Centipedes`
    }
  ],
  [SubjectType.MATH]: [
    {
      title: "Chapter 2: Factorisation",
      content: `### Page 1: Algebraic Expansion I
Expansion is the process of removing brackets.
[DIAGRAM]
a(b + c) = ab + ac

### Page 2: Algebraic Expansion II
(a + b)(c + d) = ac + ad + bc + bd
[TIP] 💡 FOIL Method: First, Outer, Inner, Last.

### Page 3: Square Identities
(a + b)² = a² + 2ab + b²
(a - b)² = a² - 2ab + b²

### Page 4: Factorisation I
The reverse of expansion.
[DIAGRAM]
4x + 12 = 4(x + 3)

### Page 5: Factorisation II (Common Factors)
Identify the Highest Common Factor (HCF).
Example: 3ab - 6ac = 3a(b - 2c)

### Page 6: Difference of Two Squares
[TIP] 💡 FORMULA: a² - b² = (a + b)(a - b)
Example: x² - 16 = (x + 4)(x - 4)

### Page 7: Cross Method Factorisation
Used for quadratic expressions like x² + bx + c.
[DIAGRAM]
x² + 5x + 6 = (x + 2)(x + 3)

### Page 8: Algebraic Fractions I
Simplifying fractions by factorising first.
(x² - 9) / (x + 3) = (x+3)(x-3) / (x+3) = x - 3

### Page 9: Operations on Fractions
Addition and subtraction require a common denominator.
[DIAGRAM]
(1/x) + (1/y) = (y + x) / xy

### Page 10: Problem Solving
Applying expansion and factorisation to solve area and volume problems in geometry.`
    }
  ],
  [SubjectType.CHINESE]: [
    {
      category: "语法",
      title: "复句与关联词深度解析",
      content: `### 第一页：并列复句
各分句之间地位平等，无主次之分。
- **关联词**：既……又……、一边……一边……
- **例句**：他一边唱歌，一边跳舞。

### 第二页：转折复句
后一分句意思发生转折，与前一分句相反。
- **关联词**：虽然……但是……、尽管……可是……
- **例句**：虽然工作很累，但他依然坚持学习。

### 第三页：递进复句
分句意思一层进一层，程度加深。
- **关联词**：不但……而且……、不仅……甚至……
[DIAGRAM]
🌱 (不但) → 🌳 (而且) → 🍎 (甚至)

### 第四页：因果复句
前一分句说原因，后一分句说结果。
- **关联词**：因为……所以……、由于……因此……
- **例句**：因为昨晚下雪，所以今天交通堵塞。

### 第五页：假设复句
前一分句提出假设，后一分句说明结果。
- **关联词**：如果……就……、即便……也……

### 第六页：条件复句
前一分句说明条件，后一分句说明在该条件下产生的结果。
- **关联词**：只有……才……、无论……都……

### 第七页：选择复句
从两个或多个分句中选择一个。
- **关联词**：不是……就是……、与其……不如……

### 第八页：修辞手法 - 比喻
[DIAGRAM]
🌟 **比喻 (Simile/Metaphor)**
- 明喻：本体 +像/如 + 喻体
- 暗喻：本体 + 是/成为 + 喻体

### 第九页：修辞手法 - 拟人与夸张
- **拟人**：赋予事物人的思想、感情或动作。
- **夸张**：为了强调而故意夸大或缩小事实。

### 第十页：语法综合运用
如何在作文中灵活运用长短句和关联词，提升文章逻辑性。`
    }
  ],
  [SubjectType.GEOGRAPHY]: [
    {
      title: "Bab 1: Skala dan Jarak (比例尺与距离)",
      content: `### Page 1: Definisi Skala (比例尺定义)
**Skala** ialah nisbah jarak di atas peta berbanding jarak sebenar di permukaan bumi.
**定义**：地图上的距离与地面上实际距离的比率。
[DIAGRAM]
🗺️ 地图距离 (Jarak Peta)
   ---------------------- = 比例尺 (Skala)
🌍 实际距离 (Jarak Sebenar)

### Page 2: Jenis Skala: Skala Lurus (直线比例尺)
**Skala Lurus** ialah garisan lurus yang dibahagikan kepada jarak yang sama.
[DIAGRAM]
|----|----|----| km 
0    1    2    3
(Setiap senggatan mewakili 1 km)

### Page 3: Jenis Skala: Skala Penyata (说明式比例尺)
**Skala Penyata** dinyatakan dalam bentuk ayat atau perkataan.
- Contoh: **"1 cm mewakili 1 km"**
- **中文解释**：地图上 1 厘米代表地面实际 1 公里。

### Page 4: Jenis Skala: Pecahan Wakilan (代表分数)
Dinyatakan dalam bentuk nisbah atau pecahan tanpa unit.
- Contoh: **1 : 50,000**
[TIP] 💡 Maksudnya: 1 cm mewakili 50,000 cm (atau 0.5 km) di permukaan bumi.

### Page 5: Definisi Jarak (距离定义)
**Jarak** ialah ukuran jauh di antara dua tempat.
**定义**：两地之间的远近测量。
Jarak terbahagi kepada:
1. **Jarak Mutlak** (绝对距离)
2. **Jarak Relatif** (相对距离)

### Page 6: Jarak Mutlak vs Jarak Relatif (对比)
[DIAGRAM]
**Jarak Mutlak (绝对)**  | **Jarak Relatif (相对)**
----------------------|-----------------------
Tetap & Tidak berubah | Berubah-ubah (Tidak tetap)
Unit: m / km          | Unit: Kos (RM) / Masa (minit)
----------------------|-----------------------
Rumah-Sekolah = 5km   | Tambang RM1.50 / 10 minit

### Page 7: Mengukur Jarak Lurus (测量直线距离)
Menggunakan **Pembaris** (尺) atau **Jangka Tolok** (圆规).
- Teknik: Letakkan pembaris secara terus pada dua titik yang ingin diukur.
- 测量两点之间的长度。

### Page 8: Mengukur Jarak Melengkung (测量曲线距离)
Menggunakan **Benang** (线) atau jalur kertas. 用于河流或弯路。
1. Letakkan benang mengikut lengkungan objek. (将线沿着弯曲路线放置)
2. Regangkan benang pada pembaris untuk dapatkan jarak. (拉直线条并在尺上测量长度)

### Page 9: Menentukan Jarak Sebenar (确定实际距离)
[DIAGRAM]
**公式 (Formula):**
实际距离 = 地图距离 × 比例尺数值
(Jarak Sebenar = Jarak Peta × Skala)

### Page 10: Contoh Pengiraan & Info Tambahan
**Contoh Pengiraan:**
Info: Jarak Peta = 10 cm, Skala = 1 cm : 2 km
Kira: 10 cm × 2 km = **20 km**.

[TIP] 💡 **Skala Besar (大比例尺)**: Kawasan kecil, butiran jelas (cth: 1:5,000).
[TIP] 💡 **Skala Kecil (小比例尺)**: Kawasan luas, butiran kurang (cth: 1:500,000).`
    }
  ],
  [SubjectType.HISTORY]: [
    {
      title: "Bab 1: Kerajaan Alam Melayu",
      content: `### Page 1: Konsep Alam Melayu
Meliputi gugusan kepulauan dan tanah besar Asia Tenggara. Mempunyai persamaan budaya, bahasa dan geografi.

### Page 2: Kerajaan Funan
Abad ke-1. Berpusat di Vyadhapura. Terletak di Lembah Sungai Mekong.

### Page 3: Kerajaan Champa
Abad ke-2. Berpusat di Indrapura. Terkenal dengan kemahiran maritim.

### Page 4: Kerajaan Srivijaya
Abad ke-7. Berpusat di Palembang. Menjadi pusat perdagangan utama di Selat Melaka.

### Page 5: Kerajaan Angkor
Abad ke-9. Berpusat di Hariharalaya. Terkenal dengan sistem pengairan 'Baray'.
[DIAGRAM]
🌾 **SISTEM BARAY**
Menyimpan air hujan → Mengairi sawah → Hasil padi meningkat.

### Page 6: Kerajaan Majapahit
Abad ke-13. Berpusat di Kota Trowulan, Jawa Timur. Mencapai kegemilangan di bawah Patih Gajah Mada.

### Page 7: Kerajaan Kedah Tua
Pusat perdagangan di Lembah Bujang. Terkenal sebagai pusat peleburan besi.

### Page 8: Hubungan Diplomatik
Kerajaan Alam Mel