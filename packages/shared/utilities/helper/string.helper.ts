export const sprintf = (string: string) => {
  return (params: object = {}) => {
    Object.entries(params).forEach(([ key, value ]) => {
      const regex = new RegExp(`{${key}}`, 'g');
      string = string.replace(regex, value);
    });

    return string;
  };
};
