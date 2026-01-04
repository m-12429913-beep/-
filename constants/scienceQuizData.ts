
export interface SyllabusQuestion {
  q: string;
  o: string[];
  a: number;
}

export interface SyllabusChapter {
  title: string;
  questions: SyllabusQuestion[];
}

export const SCIENCE_SYLLABUS: SyllabusChapter[] = [
  {
    title: "Chapter 1: Biodiversity",
    questions: [
      { q: "What is meant by biodiversity?", o: ["Diversity of living organisms", "Diversity of non-living things", "Diversity of weather", "Diversity of rocks"], a: 0 },
      { q: "Which of the following is a poikilothermic animal?", o: ["Cat", "Eagle", "Snake", "Elephant"], a: 2 },
      { q: "What is a characteristic of monocotyledon plants?", o: ["Tap root", "Fibrous root", "Woody stem", "Netted vein leaves"], a: 1 },
      { q: "Invertebrates are animals without...", o: ["Legs", "Eyes", "Backbones", "Wings"], a: 2 },
      { q: "Which group of animals has moist skin and no scales?", o: ["Reptiles", "Amphibians", "Fish", "Birds"], a: 1 },
      { q: "What is used to identify organisms based on a series of couplets?", o: ["Food web", "Periodic table", "Dichotomous key", "Life cycle"], a: 2 },
      { q: "Which of the following is an endemic species in Malaysia?", o: ["Lion", "Malayan Tiger", "Polar Bear", "Kangaroo"], a: 1 },
      { q: "Flowering plants can be divided into...", o: ["Algae and Fungi", "Monocotyledons and Dicotyledons", "Moss and Ferns", "Bacteria and Viruses"], a: 1 },
      { q: "Which class of vertebrates are homoiothermic and have feathers?", o: ["Mammals", "Amphibians", "Birds", "Reptiles"], a: 2 },
      { q: "What is the importance of biodiversity?", o: ["Increases global warming", "Provides raw materials", "Causes extinction", "Reduces oxygen"], a: 1 }
    ]
  },
  {
    title: "Chapter 2: Ecosystem",
    questions: [
      { q: "A primary consumer usually eats...", o: ["Carnivores", "Producers", "Decomposers", "Secondary consumers"], a: 1 },
      { q: "Which process removes carbon dioxide from the atmosphere?", o: ["Respiration", "Combustion", "Photosynthesis", "Decomposition"], a: 2 },
      { q: "What is the relationship where one organism benefits and the other is harmed?", o: ["Mutualism", "Commensalism", "Parasitism", "Competition"], a: 2 },
      { q: "A group of the same species living in the same habitat is a...", o: ["Community", "Population", "Ecosystem", "Niche"], a: 1 },
      { q: "What is biological control?", o: ["Using chemicals to kill pests", "Using natural predators to control pests", "Using genetically modified crops", "Ignoring pests"], a: 1 },
      { q: "In the nitrogen cycle, which organisms convert nitrogen gas into nitrates?", o: ["Animals", "Plants", "Nitrogen-fixing bacteria", "Fungi"], a: 2 },
      { q: "What happens during transpiration?", o: ["Plants take in water", "Plants release water vapor through stomata", "Animals release energy", "Rocks break down"], a: 1 },
      { q: "Which of the following is a decomposer?", o: ["Grass", "Rabbit", "Mushroom", "Fox"], a: 2 },
      { q: "Which interaction is shown by a remora fish and a shark?", o: ["Mutualism", "Commensalism", "Parasitism", "Prey-predator"], a: 1 },
      { q: "What is the main source of energy in an ecosystem?", o: ["Water", "Soil", "The Sun", "Oxygen"], a: 2 }
    ]
  },
  {
    title: "Chapter 3: Nutrition",
    questions: [
      { q: "Which food class provides the most energy?", o: ["Proteins", "Carbohydrates", "Fats", "Vitamins"], a: 2 },
      { q: "What is the end product of protein digestion?", o: ["Glucose", "Fatty acids", "Amino acids", "Glycerol"], a: 2 },
      { q: "Which reagent is used to test for the presence of starch?", o: ["Benedict's solution", "Iodine solution", "Millon's reagent", "Ethanol"], a: 1 },
      { q: "Where does most of the absorption of digested food occur?", o: ["Stomach", "Mouth", "Small intestine", "Large intestine"], a: 2 },
      { q: "What is the function of bile?", o: ["Digests proteins", "Emulsifies fats", "Digests starch", "Absorbs water"], a: 1 },
      { q: "Which vitamin deficiency causes scurvy?", o: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], a: 2 },
      { q: "What are the finger-like projections in the small intestine called?", o: ["Villi", "Alveoli", "Capillaries", "Neurons"], a: 0 },
      { q: "Which enzyme is found in saliva?", o: ["Protease", "Lipase", "Salivary amylase", "Maltase"], a: 2 },
      { q: "What is the function of roughage in the diet?", o: ["Provides energy", "Prevents constipation", "Builds muscles", "Stronger bones"], a: 1 },
      { q: "Which test gives a brick-red precipitate for reducing sugars?", o: ["Iodine test", "Benedict's test", "Biuret test", "Alcohol-emulsion test"], a: 1 }
    ]
  },
  {
    title: "Chapter 4: Human Health",
    questions: [
      { q: "Which of the following is an infectious disease?", o: ["Diabetes", "Cancer", "Cholera", "Hypertension"], a: 2 },
      { q: "What is a vector?", o: ["An organism that causes disease", "An organism that transmits pathogens", "A type of medicine", "A type of vaccine"], a: 1 },
      { q: "Which mosquito transmits the Dengue virus?", o: ["Anopheles", "Aedes", "Culex", "Mansonia"], a: 1 },
      { q: "What is the body's first line of defense?", o: ["Antibodies", "White blood cells", "Skin and mucous membranes", "Fever"], a: 2 },
      { q: "What is an antigen?", o: ["A protein that fights bacteria", "A foreign substance that triggers immunity", "A type of white blood cell", "A weakened virus"], a: 1 },
      { q: "Artificial active immunity is obtained through...", o: ["Breastfeeding", "Recovering from disease", "Vaccination", "Antiserum injection"], a: 2 },
      { q: "Antibiotics are used to treat infections caused by...", o: ["Viruses", "Bacteria", "Fungi", "Worms"], a: 1 },
      { q: "Natural passive immunity is passed from...", o: ["Vaccines", "Mother to fetus", "Food", "Water"], a: 1 },
      { q: "Which white blood cells engulf and digest pathogens?", o: ["Lymphocytes", "Phagocytes", "Platelets", "Red blood cells"], a: 1 },
      { q: "What causes AIDS?", o: ["Bacteria", "HIV virus", "Fungi", "Stress"], a: 1 }
    ]
  },
  {
    title: "Chapter 5: Water and Solution",
    questions: [
      { q: "What is the freezing point of pure water at standard pressure?", o: ["100°C", "0°C", "4°C", "273°C"], a: 1 },
      { q: "In the electrolysis of water, what is produced at the anode?", o: ["Hydrogen gas", "Oxygen gas", "Carbon dioxide", "Nitrogen"], a: 1 },
      { q: "What is a solvent?", o: ["The substance that dissolves", "The liquid that dissolves the solute", "The mixture of two liquids", "The crystals formed"], a: 1 },
      { q: "Which of the following is a universal solvent?", o: ["Alcohol", "Oil", "Water", "Vinegar"], a: 2 },
      { q: "What is a dilute solution?", o: ["Contains a lot of solute", "Contains a small amount of solute", "Cannot dissolve any more solute", "Is cloudy"], a: 1 },
      { q: "What method is used to separate insoluble solids from a liquid?", o: ["Evaporation", "Filtration", "Distillation", "Crystallization"], a: 1 },
      { q: "How does temperature affect the solubility of most solids?", o: ["Decreases it", "Increases it", "No effect", "Freezes it"], a: 1 },
      { q: "Which type of water is the purest?", o: ["Tap water", "River water", "Distilled water", "Well water"], a: 2 },
      { q: "What is added to water during purification to kill microorganisms?", o: ["Alum", "Slaked lime", "Chlorine", "Fluoride"], a: 2 },
      { q: "What is a colloid?", o: ["A transparent mixture", "A mixture where particles are spread evenly", "Sand in water", "Sugar in water"], a: 1 }
    ]
  },
  {
    title: "Chapter 6: Acid and Alkali",
    questions: [
      { q: "What is the pH value of an acid?", o: ["pH 7", "pH greater than 7", "pH less than 7", "pH 14"], a: 2 },
      { q: "Alkalis turn red litmus paper to...", o: ["Red", "Blue", "Yellow", "Colorless"], a: 1 },
      { q: "Acid + Alkali → _______ + Water", o: ["Hydrogen", "Carbon dioxide", "Salt", "Oxygen"], a: 2 },
      { q: "What is the color of phenolphthalein in an acidic solution?", o: ["Pink", "Colorless", "Blue", "Yellow"], a: 1 },
      { q: "Which of the following is an example of an alkali?", o: ["Lemon juice", "Vinegar", "Soap water", "Distilled water"], a: 2 },
      { q: "What process is used to treat acidic soil in farming?", o: ["Evaporation", "Neutralization", "Oxidation", "Reduction"], a: 1 },
      { q: "Which gas is released when acid reacts with a metal?", o: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"], a: 2 },
      { q: "What is used to measure the exact pH value of a solution?", o: ["Litmus paper", "Universal indicator", "Filter paper", "Ruler"], a: 1 },
      { q: "Strong acids have a pH value near...", o: ["0 or 1", "6 or 7", "13 or 14", "8 or 9"], a: 0 },
      { q: "Neutralization reaction produces...", o: ["Acid and salt", "Alkali and water", "Salt and water", "Acid and alkali"], a: 2 }
    ]
  },
  {
    title: "Chapter 7: Electricity",
    questions: [
      { q: "The SI unit for electric current is...", o: ["Volt (V)", "Ampere (A)", "Ohm (Ω)", "Watt (W)"], a: 1 },
      { q: "What instrument is used to measure voltage?", o: ["Ammeter", "Voltmeter", "Thermometer", "Galvanometer"], a: 1 },
      { q: "According to Ohm's Law, V = ?", o: ["I + R", "I / R", "I x R", "R / I"], a: 2 },
      { q: "What flows in a conductor to produce electricity?", o: ["Protons", "Neutrons", "Electrons", "Atoms"], a: 2 },
      { q: "In a series circuit, if one bulb blows out...", o: ["The others get brighter", "The others stay on", "The others go out", "The others get dimmer"], a: 2 },
      { q: "What is the function of a fuse?", o: ["Increase current", "Reduce resistance", "Break the circuit if current is too high", "Store energy"], a: 2 },
      { q: "Which of these is an insulator?", o: ["Copper", "Iron", "Rubber", "Aluminum"], a: 2 },
      { q: "The rate of flow of electric charge is called...", o: ["Voltage", "Resistance", "Current", "Power"], a: 2 },
      { q: "What color is the Earth wire in a 3-pin plug?", o: ["Brown", "Blue", "Yellow and Green", "Red"], a: 2 },
      { q: "Parallel circuits are used in homes because...", o: ["They use less energy", "Appliances can be controlled independently", "They are cheaper", "They produce more heat"], a: 1 }
    ]
  },
  {
    title: "Chapter 8: Magnetism",
    questions: [
      { q: "Like poles of two magnets will...", o: ["Attract", "Repel", "Do nothing", "Explode"], a: 1 },
      { q: "Magnetic field lines move from...", o: ["South to North", "North to South", "East to West", "Center to ends"], a: 1 },
      { q: "What material is best for making a temporary electromagnet?", o: ["Steel", "Soft iron", "Copper", "Glass"], a: 1 },
      { q: "A straight wire carrying current produces a...", o: ["Circular magnetic field", "Square magnetic field", "No magnetic field", "Static charge"], a: 0 },
      { q: "How can you increase the strength of an electromagnet?", o: ["Use less current", "Use fewer coils", "Use more coils", "Remove the iron core"], a: 2 },
      { q: "Which rule is used to determine the direction of magnetic field for a straight wire?", o: ["Left-hand rule", "Right-hand grip rule", "Triangle rule", "Syllabus rule"], a: 1 },
      { q: "Maglev trains use which magnetic property to float?", o: ["Attraction", "Repulsion", "Induction", "Friction"], a: 1 },
      { q: "A region where magnetic force acts is called a...", o: ["Magnetic pole", "Magnetic field", "Compass", "Core"], a: 1 },
      { q: "Earth's magnetic north pole is near the...", o: ["Geographic North Pole", "Geographic South Pole", "Equator", "Atlantic Ocean"], a: 1 },
      { q: "What device uses the magnetic effect of current to make sound?", o: ["Electric heater", "Electric bell", "Electric iron", "Light bulb"], a: 1 }
    ]
  },
  {
    title: "Chapter 9: Force and Motion",
    questions: [
      { q: "The unit of force is...", o: ["Kilogram (kg)", "Newton (N)", "Joule (J)", "Pascal (Pa)"], a: 1 },
      { q: "Which force acts against motion between two surfaces?", o: ["Gravity", "Friction", "Magnetism", "Normal force"], a: 1 },
      { q: "Pressure = Force / _______", o: ["Volume", "Mass", "Area", "Distance"], a: 2 },
      { q: "What is weight?", o: ["Mass of an object", "The gravitational pull on an object", "The size of an object", "The density of an object"], a: 1 },
      { q: "Why do heavy vehicles have many tires?", o: ["To increase pressure", "To decrease pressure", "To look better", "To go faster"], a: 1 },
      { q: "What is the turning effect of a force called?", o: ["Work", "Moment of force", "Power", "Pressure"], a: 1 },
      { q: "Archimedes' principle relates to...", o: ["Electricity", "Buoyant force", "Light", "Magnetism"], a: 1 },
      { q: "What is atmospheric pressure?", o: ["Pressure from the ocean", "Pressure from the weight of the air", "Pressure inside a balloon", "Pressure from the Sun"], a: 1 },
      { q: "A lever consists of a load, an effort, and a...", o: ["Weight", "Fulcrum", "Wheel", "String"], a: 1 },
      { q: "Work = Force x _______", o: ["Time", "Distance", "Mass", "Speed"], a: 1 }
    ]
  },
  {
    title: "Chapter 10: Sound Waves",
    questions: [
      { q: "Sound is produced by...", o: ["Light", "Vibrations", "Heat", "Magnetism"], a: 1 },
      { q: "Sound travels fastest in...", o: ["Air", "Water", "Solids", "Vacuum"], a: 2 },
      { q: "The reflection of sound is called an...", o: ["Echo", "Infrared", "Ultraviolet", "Ultrasound"], a: 0 },
      { q: "Pitch depends on the _______ of sound.", o: ["Amplitude", "Frequency", "Speed", "Loudness"], a: 1 },
      { q: "Loudness depends on the _______ of sound.", o: ["Frequency", "Amplitude", "Wavelength", "Speed"], a: 1 },
      { q: "The range of human hearing is...", o: ["20 Hz to 20,000 Hz", "0 Hz to 100 Hz", "5,000 Hz to 50,000 Hz", "Above 100,000 Hz"], a: 0 },
      { q: "What type of wave is sound?", o: ["Transverse", "Longitudinal", "Electromagnetic", "Static"], a: 1 },
      { q: "Which animal uses ultrasound for echolocation?", o: ["Snake", "Bat", "Cat", "Bird"], a: 1 },
      { q: "The change in frequency of sound due to motion is the...", o: ["Newton effect", "Doppler effect", "Einstein effect", "Ohm effect"], a: 1 },
      { q: "Soft and porous surfaces _______ sound.", o: ["Reflect", "Absorb", "Create", "Speed up"], a: 1 }
    ]
  },
  {
    title: "Chapter 11: Stars and Galaxies",
    questions: [
      { q: "The Milky Way is a _______ galaxy.", o: ["Spiral", "Elliptical", "Irregular", "Square"], a: 0 },
      { q: "The brightness of a star depends on its...", o: ["Color only", "Size and distance", "Name", "Shape"], a: 1 },
      { q: "What color are the hottest stars?", o: ["Red", "Yellow", "Blue", "White"], a: 2 },
      { q: "The process of energy production in stars is...", o: ["Combustion", "Nuclear fusion", "Photosynthesis", "Evaporation"], a: 1 },
      { q: "A light-year is a unit of...", o: ["Time", "Speed", "Distance", "Mass"], a: 2 },
      { q: "The Sun is classified as a _______ star.", o: ["Supergiant", "White dwarf", "Yellow dwarf", "Neutron star"], a: 2 },
      { q: "A massive star may end its life as a...", o: ["Planet", "Black hole", "Comet", "Moon"], a: 1 },
      { q: "Nebula is a cloud of...", o: ["Water vapor", "Dust and gases", "Liquid iron", "Ice"], a: 1 },
      { q: "What is the study of the universe called?", o: ["Biology", "Geology", "Astronomy", "Chemistry"], a: 2 },
      { q: "The temperature of a star determines its...", o: ["Color", "Weight", "Distance", "Speed"], a: 0 }
    ]
  },
  {
    title: "Chapter 12: Solar System",
    questions: [
      { q: "Which planet is known as the 'Red Planet'?", o: ["Venus", "Mars", "Jupiter", "Saturn"], a: 1 },
      { q: "The largest planet in our solar system is...", o: ["Saturn", "Jupiter", "Neptune", "Uranus"], a: 1 },
      { q: "Which planet is closest to the Sun?", o: ["Venus", "Earth", "Mercury", "Mars"], a: 2 },
      { q: "Which planet has a prominent ring system made of ice?", o: ["Jupiter", "Saturn", "Uranus", "Neptune"], a: 1 },
      { q: "What is the natural satellite of Earth?", o: ["The Sun", "The Moon", "Venus", "Mars"], a: 1 },
      { q: "The asteroid belt is located between...", o: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus"], a: 1 },
      { q: "Which planet is the hottest due to greenhouse effect?", o: ["Mercury", "Venus", "Earth", "Mars"], a: 1 },
      { q: "The path a planet takes around the Sun is its...", o: ["Axis", "Orbit", "Rotation", "Spin"], a: 1 },
      { q: "Pluto is now classified as a...", o: ["Major planet", "Dwarf planet", "Moon", "Comet"], a: 1 },
      { q: "Which planet is often called Earth's twin?", o: ["Mercury", "Venus", "Mars", "Jupiter"], a: 1 }
    ]
  },
  {
    title: "Chapter 13: Space Rocks",
    questions: [
      { q: "A 'dirty snowball' made of ice and dust is a...", o: ["Meteor", "Asteroid", "Comet", "Moon"], a: 2 },
      { q: "Small rocky bodies orbiting the Sun mostly in a belt are...", o: ["Comets", "Asteroids", "Stars", "Galaxies"], a: 1 },
      { q: "A space rock that enters Earth's atmosphere and burns up is a...", o: ["Meteorite", "Meteor", "Meteoroid", "Asteroid"], a: 1 },
      { q: "If a space rock hits the Earth's surface, it is called a...", o: ["Meteorite", "Meteor", "Comet", "Asteroid"], a: 0 },
      { q: "Where do short-period comets originate from?", o: ["Oort Cloud", "Kuiper Belt", "Mars", "The Sun"], a: 1 },
      { q: "Comet tails always point _______ the Sun.", o: ["Towards", "Away from", "Perpendicular to", "Behind"], a: 1 },
      { q: "Halley's Comet appears approximately every...", o: ["10 years", "25 years", "76 years", "200 years"], a: 2 },
      { q: "Friction between a meteoroid and the _______ causes light.", o: ["Space vacuum", "Moon", "Atmosphere", "Sun"], a: 2 },
      { q: "Most asteroids are found between Mars and...", o: ["Earth", "Venus", "Jupiter", "Saturn"], a: 2 },
      { q: "Meteor showers happen when Earth passes through...", o: ["A black hole", "Debris from a comet", "An asteroid belt", "A solar flare"], a: 1 }
    ]
  }
];
