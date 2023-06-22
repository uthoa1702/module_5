public class ThuatToan {
    public static void main(String[] args) {
        int[] a =  {1,4,2,10};
//       solution(a,10);
        System.out.println( solution(a,11 ));

    }
    public static int solution(int[] coins, int amount) {
        int min = amount;
        int a = 0;
        int result = -1;

        for (int i = 0; i < coins.length; i++) {
            if (min >= amount / coins[i]){
                min = coins[i];
            }
        }
        if (amount%min == 0){
            result = amount/min + 2;

        }
        if (amount%min != 0){
           a = amount % min;
        }
        for (int i = 0; i < coins.length; i++) {
            if (a == coins[i]){
                result = result + a + 1 ;
            }
        }






        return result;
    }
}
