export interface ITour{
  id:number,
  location: string,
  price: number,
  description: string,
  date: Date,
  image: String,
}

export interface ITourimages {
  id: number;
  imageUrl: string;
  tour: ITour;
}
