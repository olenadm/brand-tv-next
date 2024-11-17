export type VideoType = {
  id: string | undefined;
  name: string;
  url: string;
  cat?: string[] | null;
  anotherCat?: string | null;
  metaData?: [] | null;
};
