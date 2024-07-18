// this cx functions accepts the array of classnames and the filter method filters all the falsies values "empty string","null" or "undefine" and join each className with 1 space.

import { compareDesc, parseISO } from "date-fns";

export const cx = (...className) => className.filter(Boolean).join(" ");

// to render the latest blogs in the cover section so we have shorten the blogs
// this function will return an array which are shortened from latest date to the oldest one

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
