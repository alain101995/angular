# angular
This repository aims to store Angular practices.
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
git ls-tree --full-tree -r HEAD
git push -u origin "branch"

# Test Driven Development
https://app.pluralsight.com/library/courses/test-driven-development-big-picture/table-of-contents

https://www.pluralsight.com/guides/front-end-javascript/introduction-to-test-driven-development-in-javascript

# Diferencia entre npm start y ng serve -open
https://stackoverflow.com/questions/40190538/when-to-use-npm-start-and-when-to-use-ng-serve

Qué es bootstrap en angular

# What is End-to-End Testing?
https://www.tutorialspoint.com/software_testing_dictionary/end_to_end_testing.htm
