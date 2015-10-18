import {Component, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';
import {Person} from './entity/Person';

@Component({
    selector: 'my-app',
    templateUrl: 'views/person.html',
    directives: [FORM_DIRECTIVES]
})
class AppComponent {
    public person: Person = {
        id: 1,
        firstName: 'Olivier',
        lastName: 'André'
    }
}
bootstrap(AppComponent);
