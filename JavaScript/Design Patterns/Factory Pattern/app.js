
//Constructor function
function MemberFactory(){
    this.createMember = function(name,type){
        let member;
        if(type === 'simple'){
            member = new SimpleMembership();
        } else if(type === 'standard'){
            member = new StandardMembership();
        } else if(type === 'super'){
            member = new SuperMembership();
        }
        member.name = name;
        member.type = type;
        member.describe = function(){
            console.log(`${this.name} took ${this.type} membership. Membership Cost:${this.cost}`);
        }
        return member;
    }
}
//Constructor for sub-classes like SimpleMembership(), etc.
function SimpleMembership(){
    this.cost = '$4';
}
function StandardMembership(){    
    this.cost = '$6';
}
function SuperMembership(){
    this.cost = '$8';
}
let members = [];
const factory = new MemberFactory();
members.push(factory.createMember('John', 'simple'));
members.push(factory.createMember('Dale', 'standard'));
members.push(factory.createMember('Robert', 'super'));
// console.log(members[0]);
// console.log(members[1]);

members.forEach(function(member){
    member.describe();
})

