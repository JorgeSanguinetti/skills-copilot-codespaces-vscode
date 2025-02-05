function skillMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skill-member/skill-member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bintToController: true,
        scope: {
            member: '='
        }
    }
}