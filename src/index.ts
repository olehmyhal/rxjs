import { Observable } from "rxjs";

const someObservable$ = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
    // subscriber.complete();
  }, 2000);

  setTimeout(() => {
    subscriber.error(new Error("An error occured"));
  }, 1000);

  return () => {
    console.log("Teardown");
  };
});

someObservable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Complete"),
  error: (err) => console.log(err.message),
});
