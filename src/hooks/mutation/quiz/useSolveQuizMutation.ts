import { useMutation, useQueryClient } from '@tanstack/react-query';
import { solveQuiz } from '@services/api/quizService';
import { SolveQuizParams } from '@constants/quiz';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList } from '@type/navigation';

const useSolveQuizMutation = () => {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  return useMutation({
    mutationFn: (params: SolveQuizParams) => solveQuiz(params),
    mutationKey: ['solve-quiz'],
    onSuccess: (result, params) => {
      queryClient.refetchQueries({ queryKey: ['quiz-history'] });
      navigate('QuestionResult', {
        quizId: params.quizInfo.quizId,
        result,
      });
    },
  });
};

export default useSolveQuizMutation;
