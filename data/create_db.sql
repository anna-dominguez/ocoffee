DROP TABLE IF EXISTS "coffee";

CREATE TABLE "coffee"(
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(64) NOT NULL,
  "description" TEXT NOT NULL,
  "reference" VARCHAR(64) NOT NULL,
  "origin" VARCHAR(64) NOT NULL,
  "price" VARCHAR(64) NOT NULL,
  "characteristic" VARCHAR(64) NOT NULL,
  "availability" BOOLEAN NOT NULL,
  "created_at" DATE DEFAULT CURRENT_DATE NOT NULL
);

INSERT INTO "coffee"("name", "description", "reference", "origin", "price", "characteristic", "availability", "created_at") VALUES
(
  'Espresso', 
  'Café fort et concentré préparé en faisant passer de l''eau chaude à travers du café finement moulu',
  '100955890',
  'Italie',
  '20.99',
  'Corsé',
  true,
  '2024-06-19'
),
(
  'Columbian', 
  'Café moyennement corsé avec une acidité vive et une saveur riche.',
  '100955894',
  'Colombie',
  '18.75',
  'Acide',
  true,
  '2024-06-19'
),
(
  'Ethiopian Yirgacheffe', 
  'Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.',
  '105589090',
  'Éthiopie',
  '22.50',
  'Fruité',
  true,
  '2024-06-19'
),
(
  'Brazilian Santos', 
  'Café doux et lisse avec un profil de saveur de noisette',
  '134009550',
  'Brésil',
  '17.80',
  'Doux',
  true,
  '2024-05-19'
),
(
  'Guatemalan Antigua', 
  'Café corsé avec des nuances chocolatées et une pointe d''épice.',
  '256505890',
  'Guatemala',
  '21.25',
  'Corsé',
  true,
  '2024-05-19'
),
(
  'Kenyan AA', 
  'Café complexe connu pour son acidité rappelant le vin et ses saveurs fruitées.',
  '295432730',
  'Kenya',
  '23.70',
  'Acide',
  true,
  '2024-05-19'
),
(
  'Sumatra Mandheling', 
  'Café profond et terreux avec un corps lourd et une faible acidité.',
  '302932754',
  'Indonésie',
  '19.95',
  'Corsé',
  true,
  '2024-05-19'
),
(
  'Costa Rican Tarrazu', 
  'Café vif et net avec une finition propre et une acidité vive.',
  '327302954',
  'Costa Rica',
  '24.50',
  'Acide',
  true,
  '2024-04-19'
),
(
  'Vietnamese Robusta', 
  'Café audacieux et fort avec une saveur robuste distinctive.',
  '549549090',
  'Vietnam',
  '16.75',
  'Épicé',
  true,
  '2024-04-19'
),
(
  'Tanzanian Peaberry', 
  'Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.',
  '582954954',
  'Tanzanie',
  '26.80',
  'Fruité',
  true,
  '2024-04-19'
),
(
  'Jamaican Blue Mountain', 
  'Reconnu pour sa saveur douce, son acidité vive et son absence d''amertume.',
  '589100954',
  'Jamaïque',
  '39.25',
  'Doux',
  true,
  '2024-04-19'
),
(
  'Rwandan Bourbon', 
  'Café avec des notes florales prononcées, une acidité vive et un corps moyen.',
  '650753915',
  'Rwanda',
  '21.90',
  'Fruité',
  true,
  '2024-04-19'
),
(
  'Panamanian Geisha', 
  'Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.',
  '795501340',
  'Panama',
  '42.00',
  'Fruité',
  true,
  '2024-03-19'
),
(
  'Peruvian Arabica', 
  'Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.',
  '954589100',
  'Pérou',
  '19.40',
  'Chocolaté',
  false,
  '2024-03-19'
),
(
  'Hawaiian Kona', 
  'Café rare au goût riche, une acidité douce et des nuances subtiles.',
  '958090105',
  'Hawaï',
  '55.75',
  'Doux',
  false,
  '2024-03-19'
),
(
  'Nicaraguan Maragogipe', 
  'Café avec des notes de fruits, une acidité vive et un corps plein.',
  '691550753',
  'Nicaragua',
  '28.60',
  'Fruité',
  false,
  '2024-03-19'
);