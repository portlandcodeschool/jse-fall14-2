
var daysofChristmas = ["first",
       "second",
       "third",
       "fourth",
       "fifth",
       "sixth",
       "seventh",
       "eight",
       "ninth",
       "tenth",
       "eleventh",
       "twelfth"]

var giftsFromMyLove = ["A Partridge in a Pear Tree.\n\n",
      "Two Turtle Doves, and\n",
      "Three French Hens,\n",
      "Four Calling Birds,\n",
      "Fiiiiiiiiive Goollllllldeeeeen Riiiiiiinnnnngs,\n",
      "Six Geese a Laying,\n",
      "Seven Swans a Swimming,\n",
      "Eight Maids a Milking,\n",
      "Nine Ladies Dancing,\n",
      "Ten Lords a Leaping,\n",
      "Eleven Pipers Piping,\n",
      "Twelve Drummers Druming,\n"]

function singCarol() {
  var fullSongLyrics = "";
  var fullPhraseLyrics = "";
  for (day=0; day<daysofChristmas.length; day++) {
    fullPhraseLyrics = "On the "+daysofChristmas[day]+" day of Christmas\nMy true love gave to me:\n";
    for (gift=day; gift>=0; gift--) {
      fullPhraseLyrics += (giftsFromMyLove[gift]);
    }
    fullSongLyrics += fullPhraseLyrics;
  }
  return fullSongLyrics;
}