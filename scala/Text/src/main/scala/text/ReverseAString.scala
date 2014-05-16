package text

/**
 * @author dhensche
 *         Date: 5/15/14
 */
object ReverseAString extends TextProblem[String] {
  val exampleInput = Array("String A")
  def solve(string: String) = string.reverse
  def summarize(in: String, out: String) = out
}
