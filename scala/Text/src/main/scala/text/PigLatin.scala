package text

/**
  * @author dhensche
  *         Date: 5/15/14
  */
object PigLatin extends TextProblem[String] {
  val pattern = "([^aeiouAEIOU]*)(.*)".r
  val exampleInput = Array("String A")

  def solve(string: String): String = {
    string
      .split("[^\\w]+")
      .map(
        pattern.findFirstMatchIn(_).map(m => s"${m.group(2)}-${m.group(1)}ay")
      )
      .map(
        _.getOrElse("Not a Word???!!?!")
      ).mkString(" ")
  }

  def summarize(string: String, latinized: String) = latinized
 }
