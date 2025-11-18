import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);

        int A = sc.nextInt();
        int B = sc.nextInt();
        int t = A + B;
        double h = t / 2.0;

        System.out.printf("%d %.1f", t, h);
        
    }
}