type CreatedByEmail = string | number;

type CreatedBy<T extends CreatedByEmail> = {
  email: T;
  name: string;
};
