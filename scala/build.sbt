name := "Scala Problems"

version := "1.0"

scalaVersion := "2.11.0"

lazy val core = project
lazy val Text = project.dependsOn(core)
lazy val Numbers = project.dependsOn(core)