/**
 * @author dhensche
 *         Date: 5/15/14
 */
object ReverseAString {
  def main(args: Array[String]): Unit = {
    val strings = if (args.isEmpty) Array("String A") else args
    strings.map(reverse).foreach(println)
  }

  def reverse(string: String) = string.reverse
}
