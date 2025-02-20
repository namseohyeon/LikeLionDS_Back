const Sequelize = require('sequelize');

class User extends Sequelize.Model {

    static init(sequelize) {

        return super.init(
        {  // 첫번째 객체 인수는 테이블 필드에 대한 설정
            uID: {
                type: Sequelize.STRING(45),
                allowNull: false,
                unique: true,
            },
            userID: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            userPW: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            userName: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            userMajor: {
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            userEmail:{
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            userPhone:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            staff:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            class_percent:{
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            userVelog:{
                type: Sequelize.STRING(45),
                allowNull: true,
            },
            userGithub:{
                type: Sequelize.STRING(45),
                allowNull: false,
            },
            honor_image:{
                type: Sequelize.STRING(45),
                allowNull: true,
            },

        },
        {  // 두번째 객체 인수는 테이블 자체에 대한 설정
            sequelize, /* static init 메서드의 매개변수와 연결되는 옵션으로, db.sequelize 객체를 넣어야 한다. */
            timestamps: false, /* true : 각각 레코드가 생성, 수정될 때의 시간이 자동으로 입력된다. */
            underscored: false, /* 카멜 표기법을 스네이크 표기법으로 바꾸는 옵션 */
            modelName: 'User', /* 모델 이름을 설정. */
            tableName: 'user', /* 데이터베이스의 테이블 이름. */
            paranoid: false, /* true : deletedAt이라는 컬럼이 생기고 지운 시각이 기록된다. */
            charset: 'utf8', /* 인코딩 */
            collate: 'utf8_general_ci'
         }
        );
    }  
    static associate(db) {
     }
  };
  
  module.exports = User;  
