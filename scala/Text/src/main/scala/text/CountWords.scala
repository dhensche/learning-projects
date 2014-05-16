package text

import scala.io.Source
import java.net.URL

/**
 * @author dhensche
 *         Date: 5/16/14
 */
object CountWords extends TextProblem[Map[String, Int]] {
  val exampleInput: Array[String] = Array(Source.fromURL(getClass.getClassLoader.getResource("sample_text.txt")).mkString)

  def solve(input: URL): Map[String, Int] = {
    solve(Source.fromURL(input).mkString)
  }

  def solve(input: String): Map[String, Int] = {
    val words = input.replaceAll("[^\\w\\s]", "").toLowerCase.split("\\s+")
    words.groupBy(w => w).map(w => (w._1, w._2.length))
  }

  def summarize(input: String, output: Map[String, Int]): String = output.mkString("\n")
}
