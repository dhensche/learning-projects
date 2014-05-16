package core

/**
 * @author dhensche
 *         Date: 5/16/14
 */
trait BasicProblem[Input,Output] {
  val exampleInput: Array[Input]
  def solve(input: Input): Output
  def convert(args: String): Input
  def summarize(input: Input, output: Output): String

  def main(args: Array[String]) {
    val inputArr: Traversable[Input] = if (args.isEmpty) exampleInput else args.map(convert)
    inputArr.map(in => (in, solve(in))).toMap.foreach(io => println(summarize(io._1, io._2)))
  }
}
