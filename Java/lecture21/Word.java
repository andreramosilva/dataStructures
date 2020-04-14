public class Word{
	public static final int LETTERS = 26,
							WORDS = LETTERS * LETTERS;
		private String word;
		
		
		public hashCode(){
		return LETTERS*(word.charAt(0) - 'a')+(word.charAt(1) - 'a');
		}
}

public class WordDictionary{
	private definition[]dfTable = new Definition[Word.WORDS];
	
	
	public void insert(Word w, Definition d){
	defTable[w.hashCode()] = d;
	
	}
	
	Definition find(Word w){
	return defTable(w.hashCode()];
	
	}

}