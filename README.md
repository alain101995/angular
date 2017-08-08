# This repository aims to store Angular practices.

# Pluralsight
https://app.pluralsight.com/library/courses/angular-2-first-look/table-of-contents
https://www.pluralsight.com/guides/front-end-javascript/introduction-to-test-driven-development-in-javascript

# Current doubts
- @Input and @Output decorators
- Life cycles https://angular-2-training-book.rangle.io/handout/advanced-components/component_lifecycle.html
- What's bootstrap on Angular

# Angular Notes
https://toddmotto.com/passing-data-angular-2-components-input
- Two way binding
<input [{ngModel}] = 'listFilter'>
[(ngModel)] indicates two way binding between class and template
[] indicates propertie binding from class propertie to the element
() indicates event binding

- Pipes examples
{{product.productCode | lowercase}}
<img [src]='productimageUrl'
  [tittle]='product.productName' | uppercase'>
{{product.price | currency | lowercase}}
{{product.price | currency:'USD':true:'1.2-2'}}

# Git commands
Git ls-tree --full-tree -r HEAD
Git push -u origin "branch"
Git checkout
- Git init
- Git add "File or . " Origin “URL”
- Git commit -m “Message”
- Git push -u origin “branch”

# Test Driven Development
https://app.pluralsight.com/library/courses/test-driven-development-big-picture/table-of-contents
https://www.pluralsight.com/guides/front-end-javascript/introduction-to-test-driven-development-in-javascript

# Check Types of testing
End to End Testing: https://www.tutorialspoint.com/software_testing_dictionary/end_to_end_testing.htm
Black box testing
White box testing
Unit tests, Integration tests, acceptance tests (UI).
- Test examples# Unit testing examples
expect(add(1,1)).toEqual(2);
expect(add(5,7)).toEqual(12);
expect(add(-4,5)).toEqual(1);
Note: Intentar siempre documentar el funcionamiento del testing.
