package text

/**
  * @author dhensche
  *         Date: 5/15/14
  */
object CountVowels extends TextProblem[Map[String, Int]] {
  val exampleInput: Array[String] = Array("String ABIOUuu")
  val vowels = Set("A","E","I","O","U")

  def solve(string: String): Map[String, Int] = {
    val characters = string.split("")
    characters
      .map(_.toUpperCase)
      .filter(vowels.contains)
      .groupBy(c => c).map(cp => (cp._1, cp._2.length))
  }

  override def summarize(input: String, output: Map[String, Int]): String = output.mkString("\n")
}
