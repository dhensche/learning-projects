package text

/**
  * @author dhensche
  *         Date: 5/15/14
  */
object CountVowels extends TextProblem[Map[String, Int]] {
  val exampleInput: Array[String] = Array("String ABIOUuu")

  def solve(string: String): Map[String, Int] = {
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

  override def summarize(input: String, output: Map[String, Int]): String = {
    output.mkString(",")
  }
}
