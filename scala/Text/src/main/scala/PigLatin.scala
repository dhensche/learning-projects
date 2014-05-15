/**
  * @author dhensche
  *         Date: 5/15/14
  */
object PigLatin {
  val pattern = "([^aeiouAEIOU]*)(.*)".r

  def main(args: Array[String]): Unit = {
     val strings = if (args.isEmpty) Array("String A") else args
     strings.map(latinize).foreach(println)
   }

  def latinize(string: String): String = {
    string
      .split("[^\\w]+")
      .map(
        pattern.findFirstMatchIn(_).map(m => s"${m.group(2)}-${m.group(1)}ay")
      )
      .map(
        _.getOrElse("Not a Word???!!?!")
      ).mkString(" ")
  }
 }
