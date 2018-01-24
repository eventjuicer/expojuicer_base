

export const defaultLink = () =>
{

};

export const fb = () => {
  //  return "https://www.facebook.com/sharer/sharer.php?u=" . $encUrl;
};

export const li = () => {

  return `https://www.linkedin.com/shareArticle?mini=true&url=${ defaultLink() }&title=${ escape("hah") }&summary=${escape("asd")}`;

}

export const tt = () => {
//  return "https://twitter.com/home?status=" . $encUrl;
};
