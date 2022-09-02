const Course = ({ course }) => {
    const parts = course.parts;
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    console.log(course);
    console.log(parts);


    return (
        <div>
            <Header course={course.name} />
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <Total sum={total} />

        </div>
    );
};

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

export default Course;