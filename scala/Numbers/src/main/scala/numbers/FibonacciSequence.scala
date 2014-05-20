package numbers

import core.BasicProblem

/**
  * @author dhensche
  *         Date: 5/16/14
  */
object FibonacciSequence extends BasicProblem[Int, Iterable[Long]] {
  val exampleInput: Array[Int] = Array(20,2,1,75)

  lazy val fibs = {
    def next(a: Long,b: Long): Stream[Long] = a #:: next(b, a + b)
    next(0L,1L)
  }

  def solve(input: Int): Iterable[Long] = {
    fibs.take(input)
  }

  def convert(arg: String): Int = arg.toInt
  def summarize(input: Int, output: Iterable[Long]) = {
    s"The first $input numbers of the fibonacci sequence are: ${output.mkString(",")}"
  }
}
