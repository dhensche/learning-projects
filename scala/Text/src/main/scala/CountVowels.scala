/**
  * @author dhensche
  *         Date: 5/15/14
  */
object CountVowels {
  val pattern = "([^aeiouAEIOU]*)(.*)".r

  def main(args: Array[String]): Unit = {
     val strings = if (args.isEmpty) Array("String ABIOUuu") else args
     strings.map(count).foreach(m => println(m.mkString(",")))
   }

  def count(string: String): Map[String, Int] = {
    val characters = string.split("")
    val aFiltered = characters.filterNot(c => c == "A" || c == "a")
    val eFiltered = aFiltered.filterNot(c => c == "E" || c == "e")
    val iFiltered = eFiltered.filterNot(c => c == "I" || c == "i")
    val oFiltered = iFiltered.filterNot(c => c == "O" || c == "o")
    val uFiltered = oFiltered.filterNot(c => c == "U" || c == "u")
    Map(
      "A" -> (characters.length - aFiltered.length),
      "E" -> (aFiltered.length - eFiltered.length),
      "I" -> (eFiltered.length - iFiltered.length),
      "O" -> (iFiltered.length - oFiltered.length),
      "U" -> (oFiltered.length - uFiltered.length)
    )
  }
 }
