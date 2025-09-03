interface Card {
  id: string;
  member: number;
  iRarity: number;
  japaneseName: string;
  releaseDate: string;
  image: string;
  imageTrained: string;
  imageArt: string;
  imageArtTrained: string;
  transparent: string;
  transparentTrained: string;
  japaneseSkillName: string;
}

interface CardPerformance {
  performanceMin: number;
  performanceMax: number;
  performanceTrainedMax: number;
  techniqueMin: number;
  techniqueMax: number;
  techniqueTrainedMax: number;
  visualMin: number;
  visualMax: number;
  visualTrainedMax: number;
}

type CardWithPerformance = Card & CardPerformance;
