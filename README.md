# shopping_mall
## 프로젝트 개요
쇼핑몰 프로그램 개발

## Environment
Reactjs : 18.2.0<br>
Java : 17.0.8<br>
Springboot : 3.2.2<br>
Gradle : 8.5<br>
Thymeleaf : 3.1.2<br>
PostgreSQL : 42.3.8

## 초기 설정시 주의
1. Run/Configuration은 Application 설정과 Main Class를 설정
2. 상단 메뉴 File > Settings > Build, Execution, Deployment > Build Tools > Gradle에서 아래와 같이 설정
- Build and run using : IntelliJ IDEA
- Run tests using : IntelliJ IDEA
- Gradle, Distribution : Wrapper task

## Intellij 빌드 설정
[Application]<br/>
Before launch
1. Run 'Gradle build clean'
2. Build

Build and run
- java 17
- backend.main
- com.shop.backend.BackendApplication

[Gradle]<br/>
Run
- build clean -Dskip.tests
