public class Box<T> {
    public T contents;
    public T get() {
        return contents;
    }
    public void set(T contents) {
        (this).contents = contents;
    }
}