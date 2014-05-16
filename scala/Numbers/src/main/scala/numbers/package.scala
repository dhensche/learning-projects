import core.BasicProblem

package object numbers {
  trait LongProblem[Output] extends BasicProblem[Long, Output] {
    def convert(arg: String): Long = arg.toLong
  }

  trait IntProblem[Output] extends BasicProblem[Int, Output] {
    def convert(arg: String): Int = arg.toInt
  }

  trait DoubleProblem[Output] extends BasicProblem[Double, Output] {
    def convert(arg: String): Double = arg.toDouble
  }
}