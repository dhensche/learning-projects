package text

/**
  * @author dhensche
  *         Date: 5/15/14
  */
object Palindrome extends TextProblem[Boolean] {
  val exampleInput = Array("String ABIOUuu", "racecar", "kayyak")

  def solve(string: String): Boolean = {
    val len = string.length
    string.substring(0, len / 2) == string.substring(len - (len / 2)).reverse
  }

  def summarize(string: String, palindrome: Boolean) = {
    s"$string is palindrome? --> $palindrome"
  }
 }
