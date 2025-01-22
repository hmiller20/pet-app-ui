// Import all baby animations for each color
import blueSheepBabyHappy from "@/assets/animations/pets/sheep/baby/blue/blueSheepBabyHappy.json";
import blueSheepBabyNeutral from "@/assets/animations/pets/sheep/baby/blue/blueSheepBabyNeutral.json";
import blueSheepBabySad from "@/assets/animations/pets/sheep/baby/blue/blueSheepBabySad.json";
import blueSheepBabySick from "@/assets/animations/pets/sheep/baby/blue/blueSheepBabySick.json";

import yellowSheepBabyHappy from "@/assets/animations/pets/sheep/baby/yellow/yellowSheepBabyHappy.json";
import yellowSheepBabyNeutral from "@/assets/animations/pets/sheep/baby/yellow/yellowSheepBabyNeutral.json";
import yellowSheepBabySad from "@/assets/animations/pets/sheep/baby/yellow/yellowSheepBabySad.json";
import yellowSheepBabySick from "@/assets/animations/pets/sheep/baby/yellow/yellowSheepBabySick.json";

import brownSheepBabyHappy from "@/assets/animations/pets/sheep/baby/brown/brownSheepBabyHappy.json";
import brownSheepBabyNeutral from "@/assets/animations/pets/sheep/baby/brown/brownSheepBabyNeutral.json";
import brownSheepBabySad from "@/assets/animations/pets/sheep/baby/brown/brownSheepBabySad.json";
import brownSheepBabySick from "@/assets/animations/pets/sheep/baby/brown/brownSheepBabySick.json";

import pinkSheepBabyHappy from "@/assets/animations/pets/sheep/baby/pink/pinkSheepBabyHappy.json";
import pinkSheepBabyNeutral from "@/assets/animations/pets/sheep/baby/pink/pinkSheepBabyNeutral.json";
import pinkSheepBabySad from "@/assets/animations/pets/sheep/baby/pink/pinkSheepBabySad.json";
import pinkSheepBabySick from "@/assets/animations/pets/sheep/baby/pink/pinkSheepBabySick.json";

// Import all adult animations for each color
import blueSheepAdultHappy from "@/assets/animations/pets/sheep/adult/blue/blueSheepAdultHappy.json";
import blueSheepAdultNeutral from "@/assets/animations/pets/sheep/adult/blue/blueSheepAdultNeutral.json";
import blueSheepAdultSad from "@/assets/animations/pets/sheep/adult/blue/blueSheepAdultSad.json";
import blueSheepAdultSick from "@/assets/animations/pets/sheep/adult/blue/blueSheepAdultSick.json";

import yellowSheepAdultHappy from "@/assets/animations/pets/sheep/adult/yellow/yellowSheepAdultHappy.json";
import yellowSheepAdultNeutral from "@/assets/animations/pets/sheep/adult/yellow/yellowSheepAdultNeutral.json";
import yellowSheepAdultSad from "@/assets/animations/pets/sheep/adult/yellow/yellowSheepAdultSad.json";
import yellowSheepAdultSick from "@/assets/animations/pets/sheep/adult/yellow/yellowSheepAdultSick.json";

import brownSheepAdultHappy from "@/assets/animations/pets/sheep/adult/brown/brownSheepAdultHappy.json";
import brownSheepAdultNeutral from "@/assets/animations/pets/sheep/adult/brown/brownSheepAdultNeutral.json";
import brownSheepAdultSad from "@/assets/animations/pets/sheep/adult/brown/brownSheepAdultSad.json";
import brownSheepAdultSick from "@/assets/animations/pets/sheep/adult/brown/brownSheepAdultSick.json";

import pinkSheepAdultHappy from "@/assets/animations/pets/sheep/adult/pink/pinkSheepAdultHappy.json";
import pinkSheepAdultNeutral from "@/assets/animations/pets/sheep/adult/pink/pinkSheepAdultNeutral.json";
import pinkSheepAdultSad from "@/assets/animations/pets/sheep/adult/pink/pinkSheepAdultSad.json";
import pinkSheepAdultSick from "@/assets/animations/pets/sheep/adult/pink/pinkSheepAdultSick.json";

type EmotionalState = 'happy' | 'neutral' | 'sad' | 'sick';
type AnimationType = Record<EmotionalState, unknown>;
type AnimationsType = Record<string, AnimationType>;

export const ANIMATIONS: AnimationsType = {
  // Baby animations
  blueSheepBaby: {
    happy: blueSheepBabyHappy,
    neutral: blueSheepBabyNeutral,
    sad: blueSheepBabySad,
    sick: blueSheepBabySick
  },
  yellowSheepBaby: {
    happy: yellowSheepBabyHappy,
    neutral: yellowSheepBabyNeutral,
    sad: yellowSheepBabySad,
    sick: yellowSheepBabySick
  },
  brownSheepBaby: {
    happy: brownSheepBabyHappy,
    neutral: brownSheepBabyNeutral,
    sad: brownSheepBabySad,
    sick: brownSheepBabySick
  },
  pinkSheepBaby: {
    happy: pinkSheepBabyHappy,
    neutral: pinkSheepBabyNeutral,
    sad: pinkSheepBabySad,
    sick: pinkSheepBabySick
  },
  // Adult animations
  blueSheepAdult: {
    happy: blueSheepAdultHappy,
    neutral: blueSheepAdultNeutral,
    sad: blueSheepAdultSad,
    sick: blueSheepAdultSick
  },
  yellowSheepAdult: {
    happy: yellowSheepAdultHappy,
    neutral: yellowSheepAdultNeutral,
    sad: yellowSheepAdultSad,
    sick: yellowSheepAdultSick
  },
  brownSheepAdult: {
    happy: brownSheepAdultHappy,
    neutral: brownSheepAdultNeutral,
    sad: brownSheepAdultSad,
    sick: brownSheepAdultSick
  },
  pinkSheepAdult: {
    happy: pinkSheepAdultHappy,
    neutral: pinkSheepAdultNeutral,
    sad: pinkSheepAdultSad,
    sick: pinkSheepAdultSick
  }
};