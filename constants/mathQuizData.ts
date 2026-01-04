
import { SyllabusChapter } from './scienceQuizData';

export const MATH_SYLLABUS: SyllabusChapter[] = [
  {
    title: "Chapter 1: Patterns and Sequences",
    questions: [
      { q: "Determine the next number in the sequence: 4, 9, 14, 19, ...", o: ["22", "23", "24", "25"], a: 2 },
      { q: "Which of the following is the Fibonacci Sequence?", o: ["1, 2, 4, 8, ...", "1, 1, 2, 3, 5, 8, ...", "1, 3, 6, 10, ...", "2, 3, 5, 7, 11, ..."], a: 1 },
      { q: "Find the missing term in the sequence: -10, -4, 2, ___, 14", o: ["6", "8", "7", "10"], a: 1 },
      { q: "Given the sequence T_n = 2n + 5, find the 4th term.", o: ["9", "11", "13", "15"], a: 2 },
      { q: "What is the pattern rule for the sequence: 80, 40, 20, 10?", o: ["Subtract 40", "Divide by 2", "Subtract 20", "Multiply by 0.2"], a: 1 },
      { q: "Which number follows 1, 3, 6, 10, 15 (Triangular Numbers)?", o: ["20", "21", "25", "18"], a: 1 },
      { q: "The sum of the numbers in Row 4 of Pascal's Triangle (1, 4, 6, 4, 1) is?", o: ["10", "15", "16", "20"], a: 2 },
      { q: "If the pattern is n^2 + 1, what is the 5th term?", o: ["25", "26", "24", "11"], a: 1 },
      { q: "Identify the sequence that is NOT an arithmetic progression.", o: ["2, 4, 6, 8", "5, 10, 15, 20", "1, 2, 4, 8", "10, 7, 4, 1"], a: 2 },
      { q: "Complete the sequence: 128, 64, 32, 16, ___", o: ["4", "8", "12", "6"], a: 1 }
    ]
  },
  {
    title: "Chapter 2: Factorisation and Algebraic Fractions",
    questions: [
      { q: "Expand: 3(x + 5)", o: ["3x + 5", "3x + 8", "3x + 15", "x + 15"], a: 2 },
      { q: "Factorise completely: 4m + 12", o: ["4(m + 3)", "2(2m + 6)", "4(m + 12)", "m(4 + 12)"], a: 0 },
      { q: "Expand: (x + 2)(x + 3)", o: ["x² + 5x + 6", "x² + 6x + 6", "x² + 5x + 5", "x² + 6"], a: 0 },
      { q: "Factorise: x^2 - 16", o: ["(x-4)(x-4)", "(x+4)(x+4)", "(x+4)(x-4)", "x(x-16)"], a: 2 },
      { q: "Simplify: 3x / 6", o: ["2x", "x/2", "3x", "x/3"], a: 1 },
      { q: "Expand: k(k - 4)", o: ["2k - 4", "k² - 4k", "k² - 4", "k - 4k"], a: 1 },
      { q: "Factorise: 9x^2 - 25", o: ["(3x-5)(3x-5)", "(3x+5)(3x-5)", "(9x-5)(x+5)", "(3x+25)(3x-1)"], a: 1 },
      { q: "Simplify: 1/(2a) + 1/(4a)", o: ["2/6a", "3/4a", "1/6a", "5/4a"], a: 1 },
      { q: "The expansion of (2x - 1)^2 is:", o: ["4x² - 1", "4x² - 4x + 1", "4x² + 1", "2x² - 4x + 1"], a: 1 },
      { q: "List the common factors of 6x and 8xy.", o: ["2, x, 2x", "3, x, 3x", "4, y, 4y", "2, y, 2y"], a: 0 }
    ]
  },
  {
    title: "Chapter 3: Algebraic Formulae",
    questions: [
      { q: "Given y = 3x + 2, calculate y when x = 4.", o: ["10", "12", "14", "16"], a: 2 },
      { q: "Make x the subject of the formula: y = x - 5", o: ["x = y - 5", "x = y + 5", "x = 5 - y", "x = 5y"], a: 1 },
      { q: "Given A = 1/2 bh. Find A if b = 10 and h = 6.", o: ["60", "30", "16", "20"], a: 1 },
      { q: "Make u the subject of v = u + at.", o: ["u = v + at", "u = v - at", "u = v/at", "u = at - v"], a: 1 },
      { q: "Given L = 2(a + b), express a in terms of L and b.", o: ["a = L/2 - b", "a = L - 2b", "a = L/2 + b", "a = 2L - b"], a: 0 },
      { q: "If k = m^2, calculate k when m = -3.", o: ["-9", "6", "-6", "9"], a: 3 },
      { q: "Make r the subject: C = 2πr", o: ["r = C - 2π", "r = 2πC", "r = C / 2π", "r = 2π / C"], a: 2 },
      { q: "Given v^2 = u^2 + 2as. If u=0, a=2, s=9, find positive v.", o: ["6", "18", "36", "4"], a: 0 },
      { q: "Express t in terms of d and s: s = d/t", o: ["t = s/d", "t = ds", "t = d/s", "t = s - d"], a: 2 },
      { q: "Given P = 4x + 3y. Find x if P = 19 and y = 1.", o: ["3", "4", "5", "2"], a: 1 }
    ]
  },
  {
    title: "Chapter 4: Polygons",
    questions: [
      { q: "How many sides does a Heptagon have?", o: ["6", "7", "8", "9"], a: 1 },
      { q: "What is the formula for the sum of interior angles of a polygon with n sides?", o: ["(n-2) × 180°", "(n-1) × 180°", "n × 180°", "360° / n"], a: 0 },
      { q: "Calculate the sum of interior angles of a Pentagon.", o: ["360°", "540°", "720°", "900°"], a: 1 },
      { q: "What is the size of each interior angle of a regular Hexagon?", o: ["108°", "120°", "135°", "140°"], a: 1 },
      { q: "The sum of exterior angles of any polygon is always:", o: ["180°", "360°", "540°", "Depends on sides"], a: 1 },
      { q: "If an exterior angle of a regular polygon is 45°, how many sides does it have?", o: ["6", "8", "10", "12"], a: 1 },
      { q: "Find the number of diagonals in a quadrilateral.", o: ["2", "3", "4", "5"], a: 0 },
      { q: "Which polygon has interior angles summing to 360°?", o: ["Triangle", "Quadrilateral", "Pentagon", "Hexagon"], a: 1 },
      { q: "If the interior angle is 60°, the polygon is a regular...", o: ["Triangle", "Square", "Pentagon", "Hexagon"], a: 0 },
      { q: "Calculate x if the exterior angles of a triangle are 100°, 120°, and x.", o: ["100°", "120°", "140°", "160°"], a: 2 }
    ]
  },
  {
    title: "Chapter 5: Circles",
    questions: [
      { q: "What is the formula for the circumference of a circle?", o: ["πr²", "2πr", "πd²", "2πd"], a: 1 },
      { q: "Calculate the circumference of a circle with diameter 14 cm (Take π = 22/7).", o: ["22 cm", "44 cm", "88 cm", "154 cm"], a: 1 },
      { q: "What is the formula for the Area of a circle?", o: ["2πr", "πr²", "πd", "πd²/2"], a: 1 },
      { q: "A line segment connecting the center to any point on the circle is called:", o: ["Chord", "Diameter", "Radius", "Arc"], a: 2 },
      { q: "Calculate the area of a circle with radius 7 cm (Take π = 22/7).", o: ["44 cm²", "154 cm²", "144 cm²", "22 cm²"], a: 1 },
      { q: "The longest chord of a circle is called the:", o: ["Radius", "Arc", "Diameter", "Sector"], a: 2 },
      { q: "Find the length of an arc with angle 60° and radius 21 cm.", o: ["11 cm", "22 cm", "33 cm", "44 cm"], a: 1 },
      { q: "A region bounded by an arc and two radii is called a:", o: ["Segment", "Sector", "Chord", "Tangent"], a: 1 },
      { q: "If the area of a circle is 36π, what is the radius?", o: ["6", "18", "12", "3"], a: 0 },
      { q: "What is the relationship between Diameter (D) and Radius (r)?", o: ["D = r", "D = 2r", "D = r/2", "D = r²"], a: 1 }
    ]
  },
  {
    title: "Chapter 6: Three-Dimensional Geometric Shapes",
    questions: [
      { q: "What is the formula for the Volume of a Cylinder?", o: ["πr²h", "1/3 πr²h", "2πrh", "4/3 πr³"], a: 0 },
      { q: "Calculate the surface area of a cube with side 3 cm.", o: ["27 cm²", "54 cm²", "36 cm²", "9 cm²"], a: 1 },
      { q: "Which shape has a base and an apex?", o: ["Prism", "Cylinder", "Pyramid", "Cube"], a: 2 },
      { q: "The volume of a cuboid is calculated by:", o: ["Length + Width + Height", "Length × Width × Height", "2(Length + Width)", "Base Area / Height"], a: 1 },
      { q: "A cone has a radius of 3cm and height of 4cm. What is its volume? (V = 1/3 πr²h)", o: ["12π", "36π", "4π", "16π"], a: 0 },
      { q: "What is the net of a cylinder composed of?", o: ["Two circles and a rectangle", "Two circles and a triangle", "One circle and a rectangle", "Three rectangles"], a: 0 },
      { q: "Find the volume of a sphere with radius 3cm. (V = 4/3 πr³)", o: ["36π", "27π", "18π", "9π"], a: 0 },
      { q: "Total surface area of a closed cylinder is:", o: ["2πrh", "2πr² + 2πrh", "πr² + 2πrh", "πr²h"], a: 1 },
      { q: "A geometric solid with a uniform cross-section is called a:", o: ["Pyramid", "Prism", "Cone", "Sphere"], a: 1 },
      { q: "How many vertices does a cube have?", o: ["6", "8", "12", "4"], a: 1 }
    ]
  },
  {
    title: "Chapter 7: Coordinates",
    questions: [
      { q: "The coordinate plane has two axes, x-axis and...", o: ["z-axis", "y-axis", "h-axis", "v-axis"], a: 1 },
      { q: "Find the distance between A(1, 1) and B(1, 5).", o: ["4 units", "5 units", "3 units", "6 units"], a: 0 },
      { q: "What is the formula for the midpoint between (x1, y1) and (x2, y2)?", o: ["((x1+x2)/2, (y1+y2)/2)", "((x1-x2)/2, (y1-y2)/2)", "(x1+x2, y1+y2)", "((x1+y1)/2, (x2+y2)/2)"], a: 0 },
      { q: "Calculate the midpoint of P(2, 4) and Q(6, 8).", o: ["(3, 5)", "(4, 6)", "(8, 12)", "(4, 2)"], a: 1 },
      { q: "Find the distance between origin O(0,0) and R(3, 4).", o: ["5", "7", "25", "12"], a: 0 },
      { q: "If the midpoint of (2, 0) and (x, 0) is (5, 0), find x.", o: ["7", "8", "10", "3"], a: 1 },
      { q: "Which quadrant is the point (-3, 2) in?", o: ["I", "II", "III", "IV"], a: 1 },
      { q: "The x-coordinate is also known as the:", o: ["Ordinate", "Abscissa", "Origin", "Intercept"], a: 1 },
      { q: "What is the distance between (2, 5) and (5, 9)?", o: ["3", "4", "5", "7"], a: 2 },
      { q: "A point lies on the x-axis. Its y-coordinate is:", o: ["x", "1", "0", "Undefined"], a: 2 }
    ]
  },
  {
    title: "Chapter 8: Graphs of Functions",
    questions: [
      { q: "A relationship where each input has only one output is called a:", o: ["Variable", "Function", "Equation", "Constant"], a: 1 },
      { q: "What is the independent variable in y = 2x + 3?", o: ["y", "x", "2", "3"], a: 1 },
      { q: "The set of input values for a function is called the:", o: ["Range", "Domain", "Output", "Codomain"], a: 1 },
      { q: "Which table shows a linear function?", o: ["x:1,2,3 y:2,4,8", "x:1,2,3 y:3,5,7", "x:1,2,3 y:1,4,9", "x:1,2,3 y:1,1,1"], a: 1 },
      { q: "What is the shape of the graph y = x^2?", o: ["Straight line", "Parabola (U-shape)", "Circle", "Hyperbola"], a: 1 },
      { q: "If y = 5x, what is y when x = 0?", o: ["5", "1", "0", "-5"], a: 2 },
      { q: "Find the y-intercept of the function y = 2x - 4.", o: ["2", "-4", "4", "0"], a: 1 },
      { q: "Which graph represents y = 1/x?", o: ["Linear", "Quadratic", "Reciprocal", "Cubic"], a: 2 },
      { q: "A horizontal line on a graph has a function like:", o: ["y = x", "y = c", "x = c", "y = x^2"], a: 1 },
      { q: "What is the output y for f(x) = 3x + 1 when x = 2?", o: ["5", "6", "7", "8"], a: 2 }
    ]
  },
  {
    title: "Chapter 9: Speed and Acceleration",
    questions: [
      { q: "Speed is defined as the rate of change of:", o: ["Time", "Distance", "Velocity", "Direction"], a: 1 },
      { q: "What is the SI unit for speed?", o: ["m/s", "km/h", "m/s²", "kg/m"], a: 0 },
      { q: "Average speed = Total Distance / _______", o: ["Initial Speed", "Total Time", "Acceleration", "Displacement"], a: 1 },
      { q: "Acceleration is the rate of change of:", o: ["Distance", "Speed/Velocity", "Time", "Mass"], a: 1 },
      { q: "A car travels 100km in 2 hours. What is its speed?", o: ["200 km/h", "50 km/h", "25 km/h", "100 km/h"], a: 1 },
      { q: "The gradient of a Distance-Time graph represents:", o: ["Distance", "Acceleration", "Speed", "Time"], a: 2 },
      { q: "If a car slows down, it is experiencing:", o: ["Positive acceleration", "Constant speed", "Deceleration", "Zero speed"], a: 2 },
      { q: "Find the acceleration if velocity increases from 10m/s to 20m/s in 5s.", o: ["2 m/s²", "5 m/s²", "10 m/s²", "50 m/s²"], a: 0 },
      { q: "Convert 72 km/h to m/s.", o: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"], a: 1 },
      { q: "A stationary object has a speed of:", o: ["Infinity", "1 m/s", "0 m/s", "Constant"], a: 2 }
    ]
  },
  {
    title: "Chapter 10: Gradient of a Straight Line",
    questions: [
      { q: "The gradient of a straight line is the ratio of vertical distance to...", o: ["Diagonal distance", "Horizontal distance", "Total distance", "Square distance"], a: 1 },
      { q: "What is the letter usually used to represent gradient?", o: ["g", "m", "c", "s"], a: 1 },
      { q: "Gradient formula using two points (x1, y1) and (x2, y2) is:", o: ["(y2-y1)/(x2-x1)", "(x2-x1)/(y2-y1)", "(y2+y1)/(x2+x1)", "y2-y1"], a: 0 },
      { q: "A vertical line has a gradient that is:", o: ["Zero", "One", "Positive", "Undefined"], a: 3 },
      { q: "Find the gradient of a line passing through (0,0) and (2, 4).", o: ["0.5", "2", "4", "6"], a: 1 },
      { q: "If a line slopes downwards from left to right, its gradient is:", o: ["Positive", "Negative", "Zero", "Undefined"], a: 1 },
      { q: "The gradient of the x-axis is:", o: ["Zero", "Undefined", "One", "None"], a: 0 },
      { q: "Gradient can also be calculated as: - (y-intercept) / _______", o: ["Origin", "x-intercept", "Slope", "Constant"], a: 1 },
      { q: "Find m for the line y = -3x + 5.", o: ["3", "5", "-3", "-5"], a: 2 },
      { q: "Parallel lines have gradients that are:", o: ["Reciprocal", "Opposite", "Equal", "Sum to 1"], a: 2 }
    ]
  },
  {
    title: "Chapter 11: Isometric Transformations",
    questions: [
      { q: "Which of the following is an isometric transformation?", o: ["Enlargement", "Translation", "Distortion", "Shrinking"], a: 1 },
      { q: "In a translation, an object is moved in a specific:", o: ["Size", "Direction and distance", "Angle", "Scale"], a: 1 },
      { q: "A transformation that produces a mirror image is:", o: ["Rotation", "Reflection", "Translation", "Enlargement"], a: 1 },
      { q: "What is required to define a rotation?", o: ["Center and axis", "Center, angle and direction", "Mirror line", "Vector"], a: 1 },
      { q: "Isometry means the object and image are:", o: ["Different sizes", "Congruent", "Symmetrical only", "Similar only"], a: 1 },
      { q: "A reflection is defined by its:", o: ["Center", "Vector", "Mirror line/Axis of reflection", "Angle"], a: 2 },
      { q: "If a point (2, 3) is translated by vector (1, -1), the new point is:", o: ["(3, 2)", "(1, 4)", "(3, 4)", "(1, 2)"], a: 0 },
      { q: "Rotation of 180° clockwise is the same as:", o: ["90° anti-clockwise", "180° anti-clockwise", "270° clockwise", "360° rotation"], a: 1 },
      { q: "Which property remains unchanged in isometry?", o: ["Position", "Orientation", "Shape and size", "Coordinates"], a: 2 },
      { q: "How many lines of symmetry does a square have?", o: ["2", "4", "8", "Infinite"], a: 1 }
    ]
  },
  {
    title: "Chapter 12: Measures of Central Tendency",
    questions: [
      { q: "The sum of all values divided by the number of values is the:", o: ["Mode", "Median", "Mean", "Range"], a: 2 },
      { q: "The middle value in a set of ordered data is the:", o: ["Mean", "Median", "Mode", "Frequency"], a: 1 },
      { q: "The value that appears most frequently is the:", o: ["Mean", "Median", "Mode", "Average"], a: 2 },
      { q: "Find the mean of 2, 4, 6, 8.", o: ["4", "5", "6", "20"], a: 1 },
      { q: "What is the mode of 1, 2, 2, 3, 4, 4, 4, 5?", o: ["2", "3", "4", "5"], a: 2 },
      { q: "Find the median of 3, 1, 4, 2, 5.", o: ["4", "2", "3", "1"], a: 2 },
      { q: "If there are two middle values, the median is their:", o: ["Difference", "Product", "Average/Mean", "Sum"], a: 2 },
      { q: "The difference between the largest and smallest value is the:", o: ["Median", "Mode", "Range", "Mean"], a: 2 },
      { q: "Extreme values that are much higher or lower than the rest are:", o: ["Modes", "Outliers", "Means", "Medians"], a: 1 },
      { q: "Which measure is most affected by outliers?", o: ["Mean", "Median", "Mode", "None"], a: 0 }
    ]
  },
  {
    title: "Chapter 13: Probability of Simple Events",
    questions: [
      { q: "Probability is the measure of the _______ of an event occurring.", o: ["Speed", "Likelihood", "Complexity", "Time"], a: 1 },
      { q: "The value of probability is always between:", o: ["-1 and 1", "0 and 1", "0 and 100", "1 and 10"], a: 1 },
      { q: "If an event is certain to happen, its probability is:", o: ["0", "0.5", "1", "100"], a: 2 },
      { q: "If an event is impossible, its probability is:", o: ["0", "1", "-1", "0.1"], a: 0 },
      { q: "A coin is tossed. What is the probability of getting 'Heads'?", o: ["0", "1", "0.5", "0.25"], a: 2 },
      { q: "A fair dice is rolled. Probability of getting a '6' is:", o: ["1/2", "1/6", "1/3", "1"], a: 1 },
      { q: "The set of all possible outcomes is called the:", o: ["Event", "Sample space", "Result", "Outcome"], a: 1 },
      { q: "P(A') represents the probability of the _______ of event A.", o: ["Success", "Intersection", "Complement", "Union"], a: 2 },
      { q: "A bag has 3 red and 2 blue marbles. P(Red) is:", o: ["3/2", "2/3", "3/5", "2/5"], a: 2 },
      { q: "The sum of the probability of an event and its complement is:", o: ["0", "0.5", "1", "Depends on event"], a: 2 }
    ]
  }
];
