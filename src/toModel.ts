type Constructor<T> = {
  new (...args: any[]): T;
};

export function toModel<T>(className: Constructor<T>, data: Partial<T>) {
  return Object.assign(new className(), data);
}
