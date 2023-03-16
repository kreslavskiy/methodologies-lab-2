# 2 lab

## Linked list
* [First implementation](https://github.com/kreslavskiy/methodologies-lab-2/commit/997df2ca9ff543dc33297c966da5f090f5896180#diff-b036aae90e0ea482c48a797b11e1ccea4f5d47b9c5459b8ffed5ea5d3feb4bd1) of the program is a linked list based on build-in array class.

* [Second implementation](https://github.com/kreslavskiy/methodologies-lab-2/blob/master/src/linkedListNode.ts) is classic singly linked circular list.

## Calculation of variant
Defining variant formula: number of the gradebook % 4
```
1218 % 2 = 2
```

## Instruction
The project requires node.js and TypeScript to be installed on your machine.

Install dependencies:
```bash
% npm install
```

To run program:
```bash
% npm run build
% npm run start
```

To run tests:
```bash
% npm run test
```

### Reference to failed CI tests is [here](https://github.com/kreslavskiy/methodologies-lab-2/actions/runs/4441805431/jobs/7797326697). Also you can see all tests results [here](https://github.com/kreslavskiy/methodologies-lab-2/actions)

## Conclusion
When I started completing these tasks I was sure that unit-tests are totally useless, but the more tests I wrote, the more obvious it was that I'm wrong. Test povide very convenient way to develop some piece of software and to make sure that it's working properly. One another hand, writing tests is one of the most boring parts of software engineering that I've ever tried out.

Overally, I would say that tests are must-have for any project, unlike I thought before.
