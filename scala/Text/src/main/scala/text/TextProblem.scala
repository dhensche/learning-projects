package text

import core.BasicProblem

/**
 * @author dhensche
 *         Date: 5/16/14
 */
trait TextProblem[Output] extends BasicProblem[String, Output] {
  def convert(arg: String): String = arg
}
